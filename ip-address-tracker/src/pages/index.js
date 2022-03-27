import { useState, useEffect } from "react";
import Arrow from "../assets/icon-arrow.svg";
import Loader from "../components/Loading";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), {
  ssr: false,
});

import {
  Container,
  SearchSection,
  SearchInfos,
  MapContainer,
} from "../styles/HomeStyles";
import { toast } from "react-toastify";
import Head from "next/head";

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [loading, setLoading] = useState(false);
  const [results, setResult] = useState({});
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    async function getInitialData() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${apiKey}`
        );
        const data = await response.json();

        if (response.status !== 200) throw new Error();

        setResult(data);
      } catch (err) {
        toast.error("An error occurred while searching your IP!");
      } finally {
        setLoading(false);
      }
    }
    getInitialData();
  }, []);

  async function handleSubmit() {
    if (!ipAddress) return;

    try {
      setLoading(true);
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          ipAddress
        )
      ) {
        const response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${ipAddress}`
        );
        const data = await response.json();

        if (response.status !== 200) throw new Error();
        setResult(data);
      } else {
        const response = await fetch(
          `https://geo.ipify.org/api/v1?apiKey=${apiKey}&domain=${ipAddress}`
        );
        const data = await response.json();

        if (response.status !== 200) throw new Error();
        setResult(data);
      }
    } catch (err) {
      toast.error(
        "An error occurrend while searching for this IP or domain! Please try again"
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    toast.warn(
      "Pleas disable ADBlock for the application to work normally 😊🚀",
      {
        autoClose: "10000",
      }
    );
  }, []);

  const defaultPosition = [-23.55052, -46.633308];

  return (
    <Container>
      <Head>
        <title>IP Address Tracker - Find any IP address or domain easily</title>
      </Head>
      <SearchSection results={results?.location}>
        <h2>IP Address Tracker</h2>

        <div>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
            value={ipAddress}
            onChange={({ target }) => setIpAddress(target.value)}
          />
          <button disabled={!!loading} onClick={handleSubmit}>
            {loading ? <Loader /> : <Arrow />}
          </button>
        </div>

        {results?.location && (
          <SearchInfos>
            <ul>
              <li>
                <div>
                  <strong>IP Address </strong>
                  <p>{results.ip}</p>
                </div>
              </li>

              <li>
                <div>
                  <strong> LOCATION</strong>
                  <p>
                    {`${results.location.city} , ${results.location.country}`}
                    <br /> {results.location.region}
                  </p>
                </div>
              </li>

              <li>
                <div>
                  <strong>TIMEZONE</strong>
                  <p>{results.location.timezone}</p>
                </div>
              </li>

              <li>
                <div>
                  <strong>ISP</strong>
                  <p>{results.isp}</p>
                </div>
              </li>
            </ul>
          </SearchInfos>
        )}
      </SearchSection>

      <MapContainer loading={loading}>
        <Map
          defaultPosition={defaultPosition}
          location={
            results.location
              ? [results.location.lat, results.location.lng]
              : defaultPosition
          }
        />
      </MapContainer>
    </Container>
  );
}
