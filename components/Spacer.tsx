type IProps =
  | {
      y: 4 | 8 | 16 | 32;
    }
  | {
      x: 4 | 8 | 16 | 32;
    };

export const Spacer: React.FC<IProps> = ({ y, x }) => (
  <div
    style={{
      marginTop: `${y}px`,
      marginLeft: `${x}px`,
    }}
  />
);
