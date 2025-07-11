import { useParams, useSearchParams } from "react-router";

function Echo() {
  const params = useParams();
  const [searchParams] = useSearchParams();

  return <h1>{params.msg || searchParams.get("msg")}</h1>;
}

export default Echo;
