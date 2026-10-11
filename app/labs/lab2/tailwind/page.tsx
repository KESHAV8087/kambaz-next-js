import MarginsPadding from "./MarginsPadding";
import FontSizeWeight from "./FontSizeWeight";
import BackgroundColors from "./BackgroundColors";
import ResponsiveBreakpointColor from "./ResponsiveBreakpointColor";
import ResponsiveShowHide from "./ResponsiveShowHide";
import ResponsiveFlexRow from "./ResponsiveFlexRow";
import ResponsiveGridColumns from "./ResponsiveGridColumns";
import ResponsiveSpacingTextSize from "./ResponsiveSpacingTextSize";
import ResponsiveCard from "./ResponsiveCard";
import Blurs from "./Blurs";
import GridColumnSpan from "./GridColumnSpan";

export default function TailwindSamples() {
  return (
    <div id="wd-tailwind" className="space-y-6">
      <h1 className="text-2xl font-bold">Tailwind Samples</h1>
      <MarginsPadding />
      <FontSizeWeight />
      <BackgroundColors />
      <ResponsiveBreakpointColor />
      <ResponsiveShowHide />
      <ResponsiveFlexRow />
      <ResponsiveGridColumns />
      <ResponsiveSpacingTextSize />
      <ResponsiveCard />
      <Blurs />
      <GridColumnSpan />
    </div>
  );
}
