import { createRootRoute, Outlet } from '@tanstack/react-router';
import CustomCursor from '@/components/CustomCursor';
import { SmoothScroll } from '@/components/SmoothScroll';

export const Route = createRootRoute({
  component: () => (
    <>
      <CustomCursor />
      <SmoothScroll>
        <Outlet />
      </SmoothScroll>
    </>
  ),
});
