export async function generateStaticParams() {
  return [{ post: "1" }, { post: "2" }, { post: "3" }];
}

export const revalidate = 3600;

export default async function Post({ params }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  return (
    <main>
      <h1>Post - {post}</h1>
      <p>
        This is a dynamic route example. The value of the post parameter is {post}.
      </p>
    </main>
  );
}
