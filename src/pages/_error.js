import { NextSeo } from "next-seo";
import PropTypes from "prop-types";

const Error = ({ statusCode }) => {
  const title = `${statusCode} Error | My Site Name`;

  return (
    <>
      <NextSeo title={title} />
      <div>
        <h1>{statusCode}</h1>
        {statusCode === 404 ? (
          <p>Requested page not found.</p>
        ) : (
          <p>An error occurred on the server.</p>
        )}
      </div>
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  let statusCode = null;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};

Error.propTypes = {
  statusCode: PropTypes.number.isRequired,
};

export default Error;
