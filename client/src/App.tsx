import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Portfolio from "@/pages/portfolio";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/landing" component={Home} />
      <Route path="/about" component={Portfolio} />
      <Route path="/services" component={Portfolio} />
      <Route path="/process" component={Portfolio} />
      <Route path="/skills" component={Portfolio} />
      <Route path="/projects" component={Portfolio} />
      <Route path="/contact" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
