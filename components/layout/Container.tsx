import LayourAppbar from "./Appbar";

export default function LayoutContainer(props: { children: any }) {
  return (
    <>
      <LayourAppbar />
      <div className="mt-[12vh] flex w-full flex-col items-center">
        <div className="flex flex-col items-center">{props.children}</div>
      </div>
    </>
  );
}
