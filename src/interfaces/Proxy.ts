export interface ProxyNode {
  alive: boolean;
  // TODO:
  extra: any;
  history: Array<{ delay: number; time: string; }>;
  id: string;
  name: string;
  tfo: boolean;
  udp: boolean;
  xudp: boolean;
}

enum ProxyNodeType {
  // Note: Change name
  Group = "Proxy",
  Selector = "Selector",
  Trojan = "Trojan"
  // Compatible = "Compatible",
  // Direct = "Direct",
  // PASS = "PASS",
}

export interface ProxyGroup {
  expectedStatus: string;
  name: string;
  proxies: ProxySelector[];
  testUrl: string;
  type: ProxyNodeType.Group;
  vehicleTye: string;
}

export interface ProxySelector extends ProxyNode {
  /** All of name of nodes */
  all: string;
  /** Name of current node */
  now: string;
  type: ProxyNodeType.Selector;
}

export interface ProxyTrojan extends ProxyNode {
  type: ProxyNodeType.Trojan;
}