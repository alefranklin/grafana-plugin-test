type SeriesSize = 'sm' | 'md' | 'lg';

type ShapeColor = 'green' | 'blue' | 'red';

type ShapeType = 'square' | 'circle';

export interface SimpleOptions {
  text: string;
  shapeSize: number;
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
  shapeColor: ShapeColor;
  shapeType: ShapeType;
}
