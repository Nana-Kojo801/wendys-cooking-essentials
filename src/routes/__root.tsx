import { Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: () => (
    <div className="w-full h-dvh overflow-y-auto">
      <Outlet />
    </div>
  )
});
