import { Helmet } from "react-helmet-async";

interface PageTitleProps {
  title: string;
}
export const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>{title} | Instaclone</title>
    </Helmet>
  );
};
