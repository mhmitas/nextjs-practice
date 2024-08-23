export function middleware(request) {
    console.log(request.url)
    console.log("Ex")
}

export const config = {
    matcher: ["/services/(.*)", "/about"]
}