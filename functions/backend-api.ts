export interface Env {
  // 如果需要环境变量可以在这里定义
}

export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);
  
  // 检查是否是 /backend-api 开头的请求
  if (url.pathname.startsWith('/backend-api')) {
    // 移除 /backend-api 前缀
    const newPath = url.pathname.replace('/backend-api', '');
    
    // 构建新的请求URL
    const targetUrl = `https://peace3.3bodylabs.com${newPath}${url.search}`;
    
    // 创建新的请求对象,保持原始请求的方法、头部和body
    const newRequest = new Request(targetUrl, {
      method: context.request.method,
      headers: context.request.headers,
      body: context.request.body
    });

    try {
      // 发送请求到目标服务器
      const response = await fetch(newRequest);
      return response;
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }

  // 如果不是 /backend-api 开头的请求,返回 404
  return new Response('Not Found', { status: 404 });
};
