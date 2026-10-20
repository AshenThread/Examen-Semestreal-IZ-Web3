/** Único lugar que llama fetch; status 204 no contiene JSON. */
const base=(import.meta.env.VITE_API_URL??'').replace(/\/$/,'');
export async function http<T>(path:string,init:RequestInit={}):Promise<T>{
 const headers=new Headers(init.headers);if(init.body&&!headers.has('Content-Type'))headers.set('Content-Type','application/json');
 const res=await fetch(base+path,{...init,headers});
 if(!res.ok){const body:unknown=await res.json().catch(()=>null);const d=body&&typeof body==='object'?body as Record<string,unknown>:{};throw new Error(`${typeof d.error==='string'?d.error:`HTTP ${res.status}`}${typeof d.requestId==='string'?` · petición ${d.requestId}`:''}`);}
 if(res.status===204)return undefined as T;
 return res.json() as Promise<T>;
}
