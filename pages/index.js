import Link from "next/link";
import { useTranslation } from "react-i18next";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import { getCommonStaticProps } from "../utils";

export const getStaticProps = async (props) => ({
  props: await getCommonStaticProps(props),
})

const Index = () => {
  const { t } = useTranslation();

  return (
    <Layout hero={<Hero title={t("Leave Ukraine")} />}>
      <div className="flex flex-col items-center space-y-4">
        <Link href="/border-information">
          <a className="link">{t("Information about border crossings")}</a>
        </Link>
        <Link href="/about">
          <a className="link">{t("About us")}</a>
        </Link>
        <Link href="/services">
          <a className="link">{t("Services we provide")}</a>
        </Link>
      </div>
    </Layout>
  );
}

export default Index;
