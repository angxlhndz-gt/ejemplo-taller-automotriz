"""Servidor local mínimo con fallback para las rutas del CRM."""

from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class DemoHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == "/crm" or self.path.startswith("/crm/"):
            self.path = "/index.html"
        return super().do_GET()

    def log_message(self, format, *args):
        pass


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", 4173), DemoHandler)
    print("Demo disponible en http://127.0.0.1:4173/ y /crm")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()
