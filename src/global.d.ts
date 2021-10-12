declare module "hook-local-storage" {
  export default function (
    namespace: string,
    init: any
  ): [any, (newState: any) => void];
}
