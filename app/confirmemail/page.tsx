export default async function Page(props: {
  searchParams?: Promise<{
    userid?: string;
    token?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const confirm = {
    userid: searchParams?.userid || '',
    token: searchParams?.token || '',
  };

  return (
    <>
      <p>{confirm.userid}</p>
    </>
  );
}
