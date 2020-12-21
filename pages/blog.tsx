import Head from "next/head";
import {
  Layout,
  Menu,
  Image,
  Avatar,
  Tooltip,
  Button,
  List,
  Typography,
} from "antd";
import Icon from "@ant-design/icons";
import {
  FacebookSvg,
  YoutubeSvg,
  InstagramSvg,
  TwitterSvg,
} from "../components/icons";
import Link from "next/link";
import { _Header } from "../_includes/header";
import Nav from "../components/nav.component";

const { Header } = Layout;

export default function Contact() {
  return (
    <Layout>
      <Nav />
      <Layout className="site-layout">Blog </Layout>
    </Layout>
  );
}
