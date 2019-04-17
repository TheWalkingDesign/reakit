import { css, cx } from "emotion";
import { SeparatorProps, SeparatorOptions } from "reakit/Separator/Separator";
import { usePalette } from "reakit-system-palette/utils/palette";
import { useFade } from "reakit-system-palette/utils/fade";
import { BootstrapBoxOptions } from "./Box";

export type BootstrapSeparatorOptions = BootstrapBoxOptions & SeparatorOptions;

export function useSeparatorProps(
  _: BootstrapSeparatorOptions,
  htmlProps: SeparatorProps = {}
): SeparatorProps {
  const foreground = usePalette("foreground") || "black";
  const borderColor = useFade(foreground, 0.75);

  const className = css`
    border: 1px solid ${borderColor};
    border-width: 0 1px 0 0;
    margin: 0 0.5em;
    padding: 0;
    width: 0;
    height: auto;

    &[aria-orientation="horizontal"] {
      border-width: 0 0 1px 0;
      margin: 0.5em 0;
      width: auto;
      height: 0;
    }
  `;

  return { ...htmlProps, className: cx(className, htmlProps.className) };
}