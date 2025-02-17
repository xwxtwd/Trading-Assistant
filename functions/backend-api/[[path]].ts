/// <reference types="@cloudflare/workers-types" />

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  const newPath = url.pathname.replace('/backend-api', '');
  
  const targetUrl = `https://peace3.3bodylabs.com${newPath}${url.search}`;
  
  const newRequest = new Request(targetUrl, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body
  });

  try {
    const response = await fetch(newRequest);
    return response;
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
}; 