interface Dimen {
  fontSize: {
    small: number;
    normal: number;
    extraBig: number;
  };
  fontWeight: {
    extraBold: "700";
  };
  baseUnit: number;
}

const dimen: Dimen = {
  baseUnit: 8,
  fontSize: {
    small: 12,
    normal: 16,
    extraBig: 32,
  },
  fontWeight: {
    extraBold: "700",
  },
};

export default dimen;
