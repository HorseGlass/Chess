import { PieceColor } from "./constants";

const defaultConfig: ChessGameConfig = {
  startingFen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR",
  startingSide: PieceColor.WHITE,
  lightPlayerName: "Light",
  darkPlayerName: "Dark",
  lightTileColor: "#e0e0e0",
  darkTileColor: "#a1887f",
};

export enum FieldDisplayMode {
  None,
  ColumnsAndRows,
  Every,
}

let GameConfig: ChessGameConfig = defaultConfig;

/**
 * Sets current game configuration settings
 * @param config The configuration
 */
export function SetConfig(config?: ChessGameConfig): void {
  const loadedConfig = config == undefined ? {} : config;
  GameConfig = { ...GameConfig, ...loadedConfig };
}

/**
 * @returns The configuration object
 */
export function GetConfig(): ChessGameConfig {
  return GameConfig;
}

/**
 * Resets everything to default
 */
export function ResetConfig(): void {
  GameConfig = defaultConfig;
}
