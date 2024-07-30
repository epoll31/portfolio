import cn from "@/utils/cn";

export default function Timeline({
  items,
  bringActiveItemsToTop,
}: {
  items: {
    node: React.ReactNode;
    active: boolean;
  }[];
  bringActiveItemsToTop?: boolean;
}) {
  const orderedItems = bringActiveItemsToTop ? items.sort((a, b) => {
    if (a.active && !b.active) {
      return -1; // a comes before b
    } else if (!a.active && b.active) {
      return 1; // b comes before a
    } else {
      return 0; // preserve original order
    }
  }) : items;

  const gradients = items.map((_, index) => {
    const curr = items[index]?.active;

    if (index === items.length - 1) {
      return curr ? "bg-blue-300" : "bg-gray-400";
    }

    const next = items[index + 1]?.active;

    const from = curr ? "blue-300" : "gray-400";
    const to =
      (curr && (next || index === items.length - 1)) || (!curr && next)
        ? "blue-300"
        : "gray-400";

    return `bg-gradient-to-b from-${from} to-${to} from-70% to-90%`;
  });

  // TODO: finish the animations here
  return (
    <div className="flex flex-col w-full">
      {orderedItems.map((item, index) => (
        <div
          key={index}
          className="relative px-4 [&:not(:last-child)]:pb-8 group/timeline-item"
        >
          <span
            className={cn(
              `absolute top-0 left-0 w-0.5 h-full`,
              "from-gray-400 to-gray-400", // this is here to force TW to generate the classes
              "from-blue-300 to-blue-300", // this is here to force TW to generate the classes
              gradients[index],
              index === 0 ? ` rounded-t-full` : "",
              index === items.length - 1 ? `rounded-b-full` : "",
              `-translate-x-1/2`
            )}
          />
          <span
            className={cn(
              `absolute top-[0.85ch] left-0 w-3 h-3 rounded-full -translate-x-1/2`,
              item.active ? "bg-blue-300" : "bg-gray-400"
            )}
          />
          {item.node}
        </div>
      ))}
    </div>
  );
}
