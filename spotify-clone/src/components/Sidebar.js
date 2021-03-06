import React, { useEffect, useState } from "react";
import { Home, Search, LibraryMusic } from "@material-ui/icons";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import { useDataLayerValue } from "./DataLayer";

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
        alt=""
      />
      <SidebarOption Icon={Home} title="Home" />
      <SidebarOption Icon={Search} title="Search" />
      <SidebarOption Icon={LibraryMusic} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
