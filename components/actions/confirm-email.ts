export async function confirmemail(userid: String, token: String) {
  const data = {
    userid: userid,
    token: token,
  };

  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/Accounts/confirm`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => {
    if (!response.ok) {
    }
  });
}
