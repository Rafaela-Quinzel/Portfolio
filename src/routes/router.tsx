import React from 'react';
import { createRootRoute, createRouter, RouterProvider, Route } from '@tanstack/react-router';
import Home from 'pages/Home';

const rootRoute = createRootRoute();

const homeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const routeTree = rootRoute.addChildren([homeRoute]);

export const router = createRouter({
  routeTree,
});

export function AppRouterProvider() {
  return <RouterProvider router={router} />;
}
