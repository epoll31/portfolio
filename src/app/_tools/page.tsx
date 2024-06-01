import BounceIn from "@/components/effects/bounceIn";

export default function ToolsPage() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold -mb-2">Hardward</h3>
        <ul className="list-disc">
          <li>Laptop: MacBook Pro (14-inch, M1, 2020) </li>
          <li>Monitor: Apple Studio Display</li>
          <li>Keyboard: NuPhy Air75</li>
          <li>Mouse: Logitech MX Master 3</li>
          <li>Headphones: AirPods Max and AirPods Pro</li>
          <li>Notes/Reading: iPad Pro (11-inch, 2021)</li>
        </ul>
        <h3 className="text-lg font-semibold -mb-2">Software</h3>
        <ul className="list-disc">
          <li>IDE: Visual Studio Code</li>
          <li>Browser: Arc</li>
          <li>Window Manager: Amethyst</li>
          <li>Terminal: kitty</li>
          <li>File Manager: Path Finder</li>
          <li>Spotlight Search: Raycast</li>
          <li>Password Management: Dashlane</li>
        </ul>
      </div>
    </BounceIn>
  );
}
