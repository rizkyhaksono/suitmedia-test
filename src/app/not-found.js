import { Button, Result } from "antd";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <Result status="404" title="404" subTitle="Sorry, the page you visited does not exist." />
        <Link href={"/"}>
          <button className="py-2 px-4 rounded-2xl text-base text-white bg-green-500">Back Home</button>
        </Link>
      </div>
    </>
  );
}
