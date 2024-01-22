import { Outlet } from "@remix-run/react";
import Nav from "~/components/Navs/Nav";
import { requireAuth } from "~/firebase/auth.server";
import { json } from "@remix-run/node";
import { Form } from "@remix-run/react";

export async function loader({ request }) {
  const user = await requireAuth(request);

  return json({
    displayName: user.displayName,
  });
}

export default function Admin() {
  return (
    <>
      <Nav items={[{ label: "Publicar", to: "/admin/publicar" }]}>
        <Form method="POST" action="/logout">
          <button
            type="submit"
            className="p-4 bg-gradient-pink text-white rounded-lg"
          >
            Cerrar sesion
          </button>
        </Form>
      </Nav>
      <div>
        <Outlet />
      </div>
    </>
  );
}
