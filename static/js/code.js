document.addEventListener("alpine:init", () => {
  Alpine.data("CAPSTONEWIDGET", () => {
    return {
      title: "MAXIMUM UNSUPPORTED SPAN API",
      workflow: false,
      homepage: true,
      about: false,
      UCS_Virgin_Stress_Ratio: false,
      Jn_Description: false,
      Jr_Description: false,
      Ja_Description: false,
      Jw_Description: false,
      Rock_Quality_Designator: false,
      Rock_Quality_Index_Q_Value: false,
      Stress_Reduction_Ratio: false,
      Rock_Mass_Rating: false,
      Excavation_Category: false,
      Maximum_Unsupported_Span: false,
      contact_us: false,
      history: false,
      dashboard: true,
      mainMenu: false,
      message: "",
      keys: "",

      // Ja value declaratipn
      JaDesc: "",
      JaVal: "",
      value_Ja: "",
      dictJa: [
        "tightly healed|hard|non softening|impermeable rock mineral filing less than 1mm of joint seperation",
        "tightly healed|hard|non softening|impermeable rock mineral filing between 10mm to 50mm joint seperation",
        "tightly healed|hard|non softening|impermeable rock mineral filing above 5000mm joint seperation",
        "unaltered joint walls|surface staining only with less than 1mm joint seperation",
        "unaltered joint walls|surface staining only between 10mm to 50mm joint seperation",
        "unaltered joint walls|surface staining only above 5000mm joint seperation",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing less than 1mm of joint seperation",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing between 10mm to 50mm joint seperation",
        "slightly altered|non softening|non cohessive rock mineral or crushed rock filing above 5000mm joint seperation",
        "non softening|slightly clayey non cohesive less than 1mm of joint seperation",
        "non softening|slightly clayey non cohesive between 10mm to 50mm joint seperation",
        "non softening|slightly clayey non cohesive above 5000mm joint seperation",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock less than 1mm of joint seperation",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock between 10mm to 50mm joint seperation",
        "non softening strongly over consolidated clay mineral filling with or without crushed rock filing above 5000mm joint seperation",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays less than 1mm of joint seperation",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays between 10mm to 50mm joint seperation",
        "softening or low fiction clay mineral coatings and small quantities of swelling clays above 5000mm joint seperation",
        "softening moderately over consolidated clay mineral filing with or without crushed rock less than 1mm of joint seperation",
        "softening moderately over consolidated clay mineral filing with or without crushed rock between 10mm to 50mm joint seperation",
        "softening moderately over consolidated clay mineral filing with or without crushed rock above 5000mm joint seperation",
        "shattered or micro shattered swelling clay gouge with or without crushed rock less than 1mm of joint seperation",
        "shattered or micro shattered swelling clay gouge with or without crushed rock between 10mm to 50mm joint seperation",
        "shattered or micro shattered swelling clay gouge with or without crushed rock above 5000mm joint seperation",
        "Tightly healed impermeable filling",
        "Tightly healed hard and non softening impermeable filling",
        "Tightly healed non softening",
        "Tightly healed",
        "Unaltered joint walls surface staining only",
        "Unaltered joint walls",
        "surface staining only",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees",
        "Unaltered joint walls at residual frictional angle of 25 degrees",
        "Unaltered joint walls at residual frictional angle of 26 degrees",
        "Unaltered joint walls at residual frictional angle of 27 degrees",
        "Unaltered joint walls at residual frictional angle of 28 degrees",
        "Unaltered joint walls at residual frictional angle of 29 degrees",
        "Unaltered joint walls at residual frictional angle of 30 degrees",
        "Unaltered joint walls at residual frictional angle of 31 degrees",
        "Unaltered joint walls at residual frictional angle of 32 degrees",
        "Unaltered joint walls at residual frictional angle of 33 degrees",
        "Unaltered joint walls at residual frictional angle of 34 degrees",
        "Unaltered joint walls at residual frictional angle of 55 degrees",
        "surface staining only at residual frictional angle of 25 degrees",
        "surface staining only at residual frictional angle of 26 degrees",
        "surface staining only at residual frictional angle of 27 degrees",
        "surface staining only at residual frictional angle of 28 degrees",
        "surface staining only at residual frictional angle of 29 degrees",
        "surface staining only at residual frictional angle of 30 degrees",
        "surface staining only at residual frictional angle of 31 degrees",
        "surface staining only at residual frictional angle of 32 degrees",
        "surface staining only at residual frictional angle of 33 degrees",
        "surface staining only at residual frictional angle of 34 degrees",
        "surface staining only at residual frictional angle of 35 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks",
        "SLightly altered joint walls disintegrated rocks",
        "SLightly altered joint walls non softening mineral coatings",
        "SLightly altered joint sandy particles",
        "SLightly altered joint walls clay free",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees",
        "Silty or sandy clay coatings small clay fractions non softening",
        "Silty small clay fractions non softening",
        "Silty non softening",
        "Sandy clay coatings non softening",
        "Sandy clay coatings with small clay fractions",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees",
        "Silty non softening at residual frictional angle of 20 degrees",
        "Silty non softening at residual frictional angle of 21 degrees",
        "Silty non softening at residual frictional angle of 22 degrees",
        "Silty non softening at residual frictional angle of 23 degrees",
        "Silty non softening at residual frictional angle of 24 degrees",
        "Silty non softening at residual frictional angle of 25 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees",
        "Tightly healed impermeable filling Rock wall contact",
        "Tightly healed hard and non softening impermeable filling Rock wall contact",
        "Tightly healed non softening Rock wall contact",
        "Tightly healed Rock wall contact",
        "Unaltered joint walls surface staining only Rock wall contact",
        "Unaltered joint walls Rock wall contact",
        "surface staining only Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 25 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 26 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 27 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 28 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 29 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 30 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 31 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 32 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 33 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 34 degrees Rock wall contact",
        "Unaltered joint walls surface staining only at residual frictional angle of 35 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 25 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 26 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 27 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 28 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 29 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 30 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 31 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 32 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 33 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 34 degrees Rock wall contact",
        "Unaltered joint walls at residual frictional angle of 55 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 25 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 26 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 27 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 28 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 29 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 30 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 31 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 32 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 33 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 34 degrees Rock wall contact",
        "surface staining only at residual frictional angle of 35 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks Rock wall contact",
        "SLightly altered joint walls disintegrated rocks Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings Rock wall contact",
        "SLightly altered joint sandy particles Rock wall contact",
        "SLightly altered joint walls clay free Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings sandy particles clay free disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls disintegrated rocks at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls non softening mineral coatings at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint sandy particles at residual frictional angle of 30 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 25 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 26 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 27 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 28 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 29 degrees Rock wall contact",
        "SLightly altered joint walls clay free at residual frictional angle of 30 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening Rock wall contact",
        "Silty small clay fractions non softening Rock wall contact",
        "Silty non softening Rock wall contact",
        "Sandy clay coatings non softening Rock wall contact",
        "Sandy clay coatings with small clay fractions Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Silty or sandy clay coatings small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Silty small clay fractions non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Silty non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 20 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 21 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 22 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 23 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 24 degrees Rock wall contact",
        "Sandy clay coatings non softening at residual frictional angle of 25 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 20 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 21 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 22 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 23 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 24 degrees Rock wall contact",
        "Sandy clay coatings with small clay fractions at residual frictional angle of 25 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 8 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 9 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 10 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 11 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 12 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 13 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 14 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 15 degrees Rock wall contact",
        "Softening or low friction coatings that it kaolinite mica Also chlorite talc gypsum and graphite and small quantities of swelling clays discontinous quotiing between 1 to 2 mm or less at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is kaolinite and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is mica and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is chlorite and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 11 degreesRock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is talc and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is gypsum and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 8 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 9 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 10 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 11 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 12 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 13 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 14 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 15 degrees Rock wall contact",
        "softening clay mineral coatings that is graphite and small quantities of clay at a residual frictional angle of 16 degrees Rock wall contact",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 25 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 26 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 27 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 28 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 29 degrees",
        "Sandy particles clay free disintegrated rock rock wall contact before 10cm shear rock wall contact before 10cm shear at a residual frictional angle of 30 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 16 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 17 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 18 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 19 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 20 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 21 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 22 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 23 degrees",
        "Strongle over consolidated non softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 24 degrees",
        "Medium or low over consolidated softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 12 degrees",
        "Medium or low over consolidated softening clay mineral filings rock wall contact before 10cm shear at a residual frictional angle of 13 degrees",
      ],
      // Jr value declaratipn
      JrDesc: "",
      JrVal: "",
      value_Jr: "",
      dictJr: [
        "rough and discontinous",
        "rough and undulating",
        "rough and planar",
        "smooth and discountinous",
        "smooth and undulating",
        "smooth and planar",
        "slickenedsided and discountinous",
        " slickenedsided and undulating",
        "slickenedsided and planar",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar",
        "rough and discontinous with mean spacing greater than 3m",
        "rough and undulating with mean spacing greater than 3m",
        "rough and planar with mean spacing greater than 3m",
        "smooth and discountinous with mean spacing greater than 3m",
        "smooth and undulating with mean spacing greater than 3m",
        "smooth and planar with mean spacing greater than 3m",
        "slickenedsided and discountinous with mean spacing greater than 3m",
        " slickenedsided and undulating with mean spacing greater than 3m",
        "slickenedsided and planar with mean spacing greater than 3m",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous with mean spacing greater than 3m",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and undulating with mean spacing greater than 3m",
        "planar containing gouge thick enough to prevent rockwall contact and discountinous and planar with mean spacing greater than 3m",
        "Discontinous joints rock wall intact",
        "Rough and irregular undulating rock wall intact",
        "smooth undulating rock wall intact",
        "SLickenedsided undulating rock wall intact",
        "rough or irregular planar rock wall intact",
        "smooth planar rock wall intact",
        "slickened sided planar rock wall intact",
        "Discontinous joints Rock wall contact before 10 cm shear",
        "Rough and irregular undulating Rock wall contact before 10 cm shear",
        "smooth undulating Rock wall contact before 10 cm shear",
        "SLickenedsided undulating Rock wall contact before 10 cm shear",
        "smooth planar Rock wall contact before 10 cm shear",
        "slickened sided planar Rock wall contact before 10 cm shear",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared",
        "Discontinous joints rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "Rough and irregular undulating rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "smooth undulating rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "SLickenedsided undulating rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "rough or irregular planar rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "smooth planar rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "slickened sided planar rock wall intact with mean spacing of the relevant joint set greater than 3m",
        "Discontinous joints Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "Rough and irregular undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "smooth undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3",
        "smooth planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "slickened sided planar Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "Zones containing clay mineral thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m",
        "Sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m",
        "SLickenedsided undulating Rock wall contact before 10 cm shear with mean spacing of the relevant joint set greater than 3m",
        "Planar joints having linerations provided that the lineations are oriented for minimum strength",
        "Slickened sided having linearations provided that the lineations are oriented for minimum strength",
        "sandy gravely or crushed zone thick enough to prevent rock wall contact with no rock wall contact when sheared with mean spacing of the relevant joint set greater than 3m",
      ],
      // Jw value declaratipn
      JwDesc: "",
      JwVal: "",
      value_Jw: "",
      dictJw: 
      [
         "Dry excavation or minor inflow 5 decays per minute locally with head water less than 10m",
         "Medium inflow occasionally outwash of joints or fissues filings with head water between 10 to 25m",
         "large inflow in competent ground with unfilled joints or fissues",
         "large inflow with considerable outwash of joints or fissues filings",
         "exceptionally high inflow upon excavation decaying with time",
         "exceptionally high inflow continuing without noticeable decay",
         "large inflow with considerable outwash of joints or fissues filings with installed drainage",
         "exceptionally high inflow upon excavation decaying with time with installed drainage",
         "exceptionally high inflow continuing without noticeable decay with installed drainage",
         "Dry excavation or minor inflow that is less than 5litre per meter locally",
         "Medium inflow or pressure occasionally outwash of joints filings",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.1 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.2 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.3 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.4 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.5 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.6 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.7 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.8 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 1.9 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.1 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.2 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.3 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.4 pascals",
         "Medium inflow or pressure occasionally outwash of joints filings approximate water pressure of 2.5 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.1 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.2 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.3 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.4 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.5 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.6 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.7 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.8 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 1.9 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 2 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.1 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.2 pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.3  pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.4  pascals",
         "Medium inflow occasionally outwash of joints filings approximate water pressure of 2.5  pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.1 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.2 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.3 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.4 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.5 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.6 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.7 pascals ",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.8 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 1.9 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 2 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 2.1 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 2.2 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 2.3 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 2.4 pascals",
         "Pressure occasionally outwash of joints filings approximate water pressure of 2.5 pascals",
         "Large inflow or high pressure in competent rock wit unfilled joints",
         "Large inflow or high pressure in competent rock wit unfilled joints approximate water pressure of 2.5 pascals",
         "Large inflow in competent rock with unfilled joints",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 2.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 2.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 2.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 2.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 2.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 3.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 4.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 5.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 6.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 7.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 8.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.1 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.2 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.3 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.4 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.5 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.6 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.7 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.8 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 9.9 pascals",
         "Large inflow in competent rock with unfilled joints approximate water pressure of 10 pascals",
         "High pressure in competent rock with unfilled joints",
         "High pressure in competent rock with unfilled joints approximate water pressure of 2.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 2.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 2.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 2.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 2.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 3.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 4.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 5.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 6.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 7.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 8.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.1 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.2 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.3 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.4 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.5 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.6 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.7 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.8 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 9.9 pascals",
         "High pressure in competent rock with unfilled joints approximate water pressure of 10 pascals",
         "Large inflow or high pressure",
         "Large inflow with approximate water pressure of 2.5 pascals",
         "Large inflow with approximate water pressure of 2.6 pascals",
         "Large inflow with approximate water pressure of 2.7 pascals",
         "Large inflow with approximate water pressure of 2.8 pascals",
         "Large inflow with approximate water pressure of 2.9 pascals",
         "Large inflow with approximate water pressure of 3 pascals",
         "Large inflow with approximate water pressure of 3.1 pascals",
         "Large inflow with approximate water pressure of 3.2 pascals",
         "Large inflow with approximate water pressure of 3.3 pascals",
         "Large inflow with approximate water pressure of 3.4 pascals",
         "Large inflow with approximate water pressure of 3.5 pascals",
         "Large inflow with approximate water pressure of 3.6 pascals",
         "Large inflow with approximate water pressure of 3.8 pascals",
         "Large inflow with approximate water pressure of 3.7 pascals",
         "Large inflow with approximate water pressure of 3.9 pascals",
         "Large inflow with approximate water pressure of 4 pascals",
         "Large inflow with approximate water pressure of 4.1 pascals",
         "Large inflow with approximate water pressure of 4.2 pascals",
         "Large inflow with approximate water pressure of 4.3 pascals",
         "Large inflow with approximate water pressure of 4.4 pascals",
         "Large inflow with approximate water pressure of 4.5 pascals",
         "Large inflow with approximate water pressure of 4.6 pascals",
         "Large inflow with approximate water pressure of 4.7 pascals",
         "Large inflow with approximate water pressure of 4.8 pascals",
         "Large inflow with approximate water pressure of 4.9 pascals",
         "Large inflow with approximate water pressure of 5 pascals",
         "Large inflow with approximate water pressure of 5.1 pascals",
         "Large inflow with approximate water pressure of 5.2 pascals",
         "Large inflow with approximate water pressure of 5.3 pascals",
         "Large inflow with approximate water pressure of 5.4 pascals",
         "Large inflow with approximate water pressure of 5.5 pascals",
         "Large inflow with approximate water pressure of 5.6 pascals",
         "Large inflow with approximate water pressure of 5.7 pascals",
         "Large inflow with approximate water pressure of 5.8 pascals",
         "Large inflow with approximate water pressure of 5.9 pascals",
         "Large inflow with approximate water pressure of 6 pascals",
         "Large inflow with approximate water pressure of 6.1 pascals",
         "Large inflow with approximate water pressure of 6.2 pascals",
         "Large inflow with approximate water pressure of 6.3 pascals",
         "Large inflow with approximate water pressure of 6.4 pascals",
         "Large inflow with approximate water pressure of 6.5 pascals",
         "Large inflow with approximate water pressure of 6.6 pascals",
         "Large inflow with approximate water pressure of 6.7 pascals",
         "Large inflow with approximate water pressure of 6.8 pascals",
         "Large inflow with approximate water pressure of 6.9 pascals",
         "Large inflow with approximate water pressure of 7 pascals",
         "Large inflow with approximate water pressure of 7.1 pascals",
         "Large inflow with approximate water pressure of 7.2 pascals",
         "Large inflow with approximate water pressure of 7.3 pascals",
         "Large inflow with approximate water pressure of 7.4 pascals",
         "Large inflow with approximate water pressure of 7.5 pascals",
         "Large inflow with approximate water pressure of 7.6 pascals",
         "Large inflow with approximate water pressure of 7.7 pascals",
         "Large inflow with approximate water pressure of 7.8 pascals",
         "Large inflow with approximate water pressure of 7.9 pascals",
         "Large inflow with approximate water pressure of 8 pascals",
         "Large inflow with approximate water pressure of 8.1 pascals",
         "Large inflow with approximate water pressure of 8.2 pascals",
         "Large inflow with approximate water pressure of 8.3 pascals",
         "Large inflow with approximate water pressure of 8.4 pascals",
         "Large inflow with approximate water pressure of 8.5 pascals",
         "Large inflow with approximate water pressure of 8.6 pascals",
         "Large inflow with approximate water pressure of 8.7 pascals",
         "Large inflow with approximate water pressure of 8.8 pascals",
         "Large inflow with approximate water pressure of 8.9 pascals",
         "Large inflow with approximate water pressure of 9 pascals",
         "Large inflow with approximate water pressure of 9.1 pascals",
         "Large inflow with approximate water pressure of 9.2 pascals",
         "Large inflow with approximate water pressure of 9.3 pascals",
         "Large inflow with approximate water pressure of 9.4 pascals",
         "Large inflow with approximate water pressure of 9.5 pascals",
         "Large inflow with approximate water pressure of 9.6 pascals",
         "Large inflow with approximate water pressure of 9.7 pascals",
         "Large inflow with approximate water pressure of 9.8 pascals",
         "Large inflow with approximate water pressure of 9.9 pascals",
         "Large inflow with approximate water pressure of 10 pascals",
         "Large pressure with approximate water pressure of 2.5 pascals",
         "Large pressure with approximate water pressure of 2.6 pascals",
         "Large pressure with approximate water pressure of 2.7 pascals",
         "Large pressure with approximate water pressure of 2.8 pascals",
         "Large pressure with approximate water pressure of 2.9 pascals",
         "Large pressure with approximate water pressure of 3 pascals",
         "Large pressure with approximate water pressure of 3.1 pascals",
         "Large pressure with approximate water pressure of 3.2 pascals",
         "Large pressure with approximate water pressure of 3.3 pascals",
         "Large pressure with approximate water pressure of 3.4 pascals",
         "Large pressure with approximate water pressure of 3.5 pascals",
         "Large pressure with approximate water pressure of 3.6 pascals",
         "Large pressure with approximate water pressure of 3.8 pascals",
         "Large pressure with approximate water pressure of 3.7 pascals",
         "Large pressure with approximate water pressure of 3.9 pascals",
         "Large pressure with approximate water pressure of 4 pascals",
         "Large pressure with approximate water pressure of 4.1 pascals",
         "Large pressure with approximate water pressure of 4.2 pascals",
         "Large pressure with approximate water pressure of 4.3 pascals",
         "Large pressure with approximate water pressure of 4.4 pascals",
         "Large pressure with approximate water pressure of 4.5 pascals",
         "Large pressure with approximate water pressure of 4.6 pascals",
         "Large pressure with approximate water pressure of 4.7 pascals",
         "Large pressure with approximate water pressure of 4.8 pascals",
         "Large pressure with approximate water pressure of 4.9 pascals",
         "Large pressure with approximate water pressure of 5 pascals",
         "Large pressure with approximate water pressure of 5.1 pascals",
         "Large pressure with approximate water pressure of 5.2 pascals",
         "Large pressure with approximate water pressure of 5.3 pascals",
         "Large pressure with approximate water pressure of 5.4 pascals",
         "Large pressure with approximate water pressure of 5.5 pascals",
         "Large pressure with approximate water pressure of 5.6 pascals",
         "Large pressure with approximate water pressure of 5.7 pascals",
         "Large pressure with approximate water pressure of 5.8 pascals",
         "Large pressure with approximate water pressure of 5.9 pascals",
         "Large pressure with approximate water pressure of 6 pascals",
         "Large pressure with approximate water pressure of 6.1 pascals",
         "Large pressure with approximate water pressure of 6.2 pascals",
         "Large pressure with approximate water pressure of 6.3 pascals",
         "Large pressure with approximate water pressure of 6.4 pascals",
         "Large pressure with approximate water pressure of 6.5 pascals",
         "Large pressure with approximate water pressure of 6.6 pascals",
         "Large pressure with approximate water pressure of 6.7 pascals",
         "Large pressure with approximate water pressure of 6.8 pascals",
         "Large pressure with approximate water pressure of 6.9 pascals",
         "Large pressure with approximate water pressure of 7 pascals",
         "Large pressure with approximate water pressure of 7.1 pascals",
         "Large pressure with approximate water pressure of 7.2 pascals",
         "Large pressure with approximate water pressure of 7.3 pascals",
         "Large pressure with approximate water pressure of 7.4 pascals",
         "Large pressure with approximate water pressure of 7.5 pascals",
         "Large pressure with approximate water pressure of 7.6 pascals",
         "Large pressure with approximate water pressure of 7.7 pascals",
         "Large pressure with approximate water pressure of 7.8 pascals",
         "Large pressure with approximate water pressure of 7.9 pascals",
         "Large pressure with approximate water pressure of 8 pascals",
         "Large pressure with approximate water pressure of 8.1 pascals",
         "Large pressure with approximate water pressure of 8.2 pascals",
         "Large pressure with approximate water pressure of 8.3 pascals",
         "Large pressure with approximate water pressure of 8.4 pascals",
         "Large pressure with approximate water pressure of 8.5 pascals",
         "Large pressure with approximate water pressure of 8.6 pascals",
         "Large pressure with approximate water pressure of 8.7 pascals",
         "Large pressure with approximate water pressure of 8.8 pascals",
         "Large pressure with approximate water pressure of 8.9 pascals",
         "Large pressure with approximate water pressure of 9 pascals",
         "Large pressure with approximate water pressure of 9.1 pascals",
         "Large pressure with approximate water pressure of 9.2 pascals",
         "Large pressure with approximate water pressure of 9.3 pascals",
         "Large pressure with approximate water pressure of 9.4 pascals",
         "Large pressure with approximate water pressure of 9.5 pascals",
         "Large pressure with approximate water pressure of 9.6 pascals",
         "Large pressure with approximate water pressure of 9.7 pascals",
         "Large pressure with approximate water pressure of 9.8 pascals",
         "Large pressure with approximate water pressure of 9.9 pascals",
         "Large pressure with approximate water pressure of 10 pascals",
         "Exceptionally high inflow with apprpximate water pressure greater than 10 pascals",
         "Exceptionally high pressure with apprpximate water pressure greater than 10 pascals",
       ],

      // RMR value declaratipn
      RMR_Q_Value:0,
      Q_Value: 0,
      rmr_val: 0,
      // RQD value declaration
      Depth_from_surface: "",
      depth_to_surface: "",
      true_thickness: "",
      hardness_property: "",
      RQDValue: "",
      NumRQD: "",
      ImpMessage: "",
      SuppMessage: "",
      ExcMessage: "",

      // Rock mass quality function based on RQD value declarations

      rmqMessage: "",
      rmq_value: 0,
      openRockMassQuality: false,
      closeRockMassQuality: true,

      // Q value declaration
      RQDValue: "",
      JnValue: "",
      JrValue: "",
      JaValue: "",
      JwValue: "",
      QValue: "",
      SRFValue: "",
      QMessage: "",
      // Q_value: 0,
      NumQ: "",

      Jn_PredictedValue: '',
      Jw_PredictedValue: '',
      Ja_PredictedValue: '',
      Jr_PredictedValue: '',
      RQD_PredictedValue: '',
      Q_Value_PredictedValue: '',
      RMR_PredictedValue: '',
      Maximum_unsupported_span: '',

      // Analysys function based on the Q value declarations
      qAnalysMessage1: "",
      qAnalysMessage2: "",
      qAnalysMessage3: "",
      openQAanalysis: false,
      closeQAanalysis: true,

      // SRF value declarations
      Virgin_stress_ratio: "",
      srf_predicted: '',
      srf_value: "",

     

      // UCS/VSR value declaration
      Depth: "",
      UCS: "",
      Density: "",
      ucsvsr_value: "",
      UCS_Predicted: "",

      openHome(currentSection) {
        this.homepage = true;
        this.UCS_Virgin_Stress_Ratio = false;
        // this.homepage = false;
        this.about = false;
        this.Jn_Description = false;
        this.Jr_Description = false;
        this.Ja_Description = false;
        this.Jw_Description = false;
        this.Rock_Quality_Designator = false;
        this.Rock_Quality_Index_Q_Value = false;
        this.Stress_Reduction_Ratio = false;
        this.Rock_Mass_Rating = false;
        this.Excavation_Category = false;
        this.Maximum_Unsupported_Span = false;
        this.contact_us = false;
        this.history = false;
        this.dashboard = true;
        if (currentSection == "UCS_Virgin_Stress_Ratio") {
          this.UCS_Virgin_Stress_Ratio = true;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Jn_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = true;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Ja_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = true;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Jr_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = true;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Jw_Description") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = true;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Rock_Quality_Designator") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.depth_to_surface = this.use_Depth_To;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = true;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Rock_Quality_Index_Q_Value") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;

          this.JnValue = this.use_Jn;
          this.JrValue = this.use_Jr;
          this.JaValue = this.use_Ja;
          this.JwValue = this.use_Jw;
          this.SRFValue = this.use_SRF;
          this.RQDValue = this.use_RQD;

          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = true;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Stress_Reduction_Ratio") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Virgin_stress_ratio = this.use_UCS;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = true;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Rock_Mass_Rating") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Q_Value = this.use_Q_Value;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = true;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Excavation_Category") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = true;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "Maximum_Unsupported_Span") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.ESR_VALUE = this.use_ESR_Value;
          this.Q_Value = this.use_Q_Value;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = true;
          this.contact_us = false;
          this.history = false;
          this.dashboard = true;
        } else if (currentSection == "contact_us") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = true;
          this.history = false;
          this.dashboard = false;
        } else if (currentSection == "history") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = false;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = true;
          this.dashboard = false;
        } else if (currentSection == "about") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = false;
          this.about = true;
          this.Jn_Description = false;
          this.Jr_Description = false;
          this.Ja_Description = false;
          this.Jw_Description = false;
          this.Rock_Quality_Designator = false;
          this.Rock_Quality_Index_Q_Value = false;
          this.Stress_Reduction_Ratio = false;
          this.Rock_Mass_Rating = false;
          this.Excavation_Category = false;
          this.Maximum_Unsupported_Span = false;
          this.contact_us = false;
          this.history = false;
          this.dashboard = false;
        } else if (currentSection == "mainMenu") {
          this.UCS_Virgin_Stress_Ratio = false;
          this.homepage = true;
          this.dashboard = true;
          this.contact_us = false;
          this.history = false;
          this.about = false;
        }
      },
      ucs_vsr() {
        axios
          .post("/api/ucs_model", {
            Depth: this.Depth,
            Density: this.Density,
            UCS: this.UCS,
          })
          .then((res) => {
            console.log(res.data);
            this.UCS_Predicted = res.data.prediction;
            console.log('111 predicted value: ' + this.UCS_Predicted);

            this.Post_UCS()

            this.ucsvsr_value =
              "Based on your input, the ratio of the Uniaxial compressive strength to the virgin stress is " +
              this.UCS_Predicted.toFixed(2);
          });
      },

      SRF() {
        axios
          .post("/api/srf_model", {
            Virgin_stress_ratio: this.Virgin_stress_ratio,
          })
          .then((res) => {
            console.log(res.data);
            this.srf_predicted = res.data.prediction;

            this.Post_SRF()
            this.srf_value =
              "Based on your input, the predicted Stress Reduction value is " +
              this.srf_predicted;
          });
      },

      // Jn value declaratipn
      JnDesc: "",
      JnVal: "",
      keys: "",
      value_Jn: "",
      dictJn: [
        "Intact no or few joints",
        "one joint set",
        "one joint set plus random joints",
        "two joint set",
        "two joint set plus random joints",
        "three joint set",
        "three joint set plus random joint",
        "Four or more joint set|random joint|heavily jointed|sugar cube",
        "crushed rock|eathlike",
        "intact or few joints with intersections",
        "one joint set with intersections",
        "one joint set plus random joints with intersections",
        "two joint sets plus intersections",
        "two joint set plus random joints with intersections",
        "three joint sets with intersections",
        "three joint sets plus random joints with intersections",
        "Four or more joint set|random joint|heavily jointed|sugar cube with intersections",
        "crushed rock|eathlike with intersections",
        "intact | no or few joints with portals",
        "one joint set with portals",
        "one joint set plus random joints with portals",
        "two joint sets with portals",
        "two joint sets plus random joints with portals",
        "three joint sets with portals",
        "three joint sets plus random joints with portals",
        "Four or more joint sets| random|heavily jointed|sugar|cubed with portals",
        "crushed rock|earthlike with portals",
        "Massive no or few joints",
        "one joint set plus random",
        "two joint set plus random",
        "Three joint set",
        "Three joint set plus random",
        "Four or more joint set random heavily jointed sugar cube",
        "crushed rock earthlike",
        "Massive no or few joints with intersections",
        "one joint set plus random with intersections",
        "two joint set with intersections",
        "two joint set plus random with intersections",
        "Three joint set with intersections",
        "Three joint set plus random with intersections",
        "Four or more joint set random heavily jointed sugar cube with intersections",
        "crushed rock earthlike with intersections",
        "Massive no or few joints with portals",
        "one joint set plus random with portals",
        "two joint set with portals",
        "two joint set plus random with portals",
        "Three joint set with portals",
        "Three joint set plus random with portals",
        "Four or more joint set random heavily jointed sugar cube with portals",
        "crushed rock earthlike with portals",
      ],

      // 3. Jn frontend function definition
      JnDescription() {
        axios
          .post("/api/Jn_model", {
            Jn_Description: String(this.JnDesc),
          })
          .then((res) => {
            this.Jn_PredictedValue = res.data.prediction[0];
            this.JnVal =
              "Based on your input, the predicted Jn value is " +
              res.data.prediction[0].toFixed(2);
              this.Post_Jn()
          });
      },

      // 4. Jn frontend function definition
      JrDescription() {
        axios
          .post("/api/Jr_model", {
            Jr_Description: String(this.JrDesc),
          })
          .then((res) => {
            this.Jr_PredictedValue = res.data.prediction[0];

            this.JrVal =
              "Based on your input, the predicted Joint Orientation (Jr value) is " +
              res.data.prediction[0].toFixed(2);
              this.Post_Jr()
          });
      },

      // 5. Ja frontend function definition

      JaDescription() {
        axios
          .post("/api/Ja_model", {
            Ja_Description: String(this.JaDesc),
          })
          .then((res) => {
            this.Ja_PredictedValue = res.data.prediction[0];

            this.JaVal =
              "Based on your input, the predicted Joint Alteration (Ja value) is " +
              res.data.prediction[0].toFixed(2);
              this.Post_Ja()
          });
      },

      // 6. Jw frontend function definition

      JwDescription() {
        axios
          .post("/api/Jw_model", {
            Jw_Description: String(this.JwDesc),
          })
          .then((res) => {
            this.Jw_PredictedValue = res.data.prediction[0];
            this.JwVal =
              "Based on your input, the predicted Joint Water Reduction (Jw value) is " +
              res.data.prediction[0].toFixed(2);
              this.Post_Jw()
          });
      },

      RQD() {
        axios
          .post("/api/rqd_model", {
            DepthFrom: this.Depth_from_surface,
            DepthTo: this.depth_to_surface,
            Truethickness: this.true_thickness,
            Hardness: this.hardness_property,
          })
          .then((res) => {
            this.RQD_PredictedValue = res.data.prediction;
            console.log(this.RQD_PredictedValue);
            this.Post_rqd()

            this.RQDValue =
              "Based on your input, the predicted RQD value is " + this.RQD_PredictedValue.toFixed(2) + "%";
            this.NumRQD = this.RQD_PredictedValue.toFixed(2);
          });
      },
      rock_mass_quality() {
        this.RQDValue = "";
        this.openRockMassQuality = true;
        this.closeRockMassQuality = false;
        // this.true_thickness.RQD_PredictedValue = this.rmq_value;
        if (this.RQD_PredictedValue < 25 && this.RQD_PredictedValue > 0) {
          this.rmqMessage =
            "The rock mass quality based on your input is very poor.";
          this.ImpMessage =
            "Tunneling, Room and Pillar, Cut and Fill, Sub-level Stoping, Block Caving, Drift and Fill,Hydraulic Fracturing";
          this.SuppMessage = "bolting, shotcrete, or mesh";
          this.ExcMessage =
            "Temporal mine openings,Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels";
        } else if (this.RQD_PredictedValue > 25 && this.RQD_PredictedValue <= 50) {
          this.rmqMessage = "The rock mass quality based on your input is poor";
          this.ImpMessage =
            "Open-Pit Mining,Room and Pillar Mining,Cut and Fill Mining,Sublevel Stoping,Block Caving,Room and Bench Mining,Drift Mining,Hydraulic Fracturing and Grouting";
          this.SuppMessage =
            "Rock Bolting,Mesh and Shotcrete,Cable Bolting,Ground Monitoring,Rock Reinforcement,Rib and Roof Bolting,Rockfall Protection Systems,Shotcrete Lining,Grouting,Rockfall Drapery";
          this.ExcMessage =
            "Temporal mine openings,Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels,Power stations, major road and railway tunnels, civil defence chambers, portal intersections";
        } else if (this.RQD_PredictedValue > 50 && this.RQD_PredictedValue <= 75) {
          this.rmqMessage =
            "The rock mass quality based on your input is fair.";
          this.ImpMessage =
            "Open Pit Mining,Room and Pillar Mining,Cut and Fill Mining,Block Caving,Sublevel Stoping,Benching,Heap Leach Mining,";
          this.SuppMessage =
            "Rock Bolting,Shotcrete (Sprayed Concrete),Mesh and Wire Mesh,Cable Bolting,Grouting,Arch and Beam Supports,Rock Reinforcement Mesh,Rock Grillage or Rock Bolster,Ground Monitoring and Instrumentation";
          this.ExcMessage =
            "Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels,Power stations, major road and railway tunnels, civil defence chambers, portal intersections";
        } else if (this.RQD_PredictedValue > 75 && this.RQD_PredictedValue <= 90) {
          this.rmqMessage = "The rock mass quality based on your input is Good";
          this.ImpMessage =
            "Open-Pit Mining,Underground Room and Pillar Mining,Block Caving,Sublevel Stoping,Cut and Fill Mining,Shaft Sinking,Room and Bench Mining,Drift Mining,Quarrying";
          this.SuppMessage =
            "Rock Bolting,Shotcrete,Mesh and Meshing Systems,Cable Bolting,Grouting,Reinforced Shotcrete,Rib and Lagging Support,Rockfall Protection Systems,Anchor Systems,Grout Curtain";
          this.ExcMessage =
            "Power stations, major road and railway tunnels, civil defence chambers, portal intersections,Underground nuclear power station, railway stations, sports and public facilities,Permanent mine openings, water tunnels for hydro(power high pressure penstocks),pilot tunnels, drifts and headings for large excavation";
        } else if (this.RQD_PredictedValue > 90 && this.RQD_PredictedValue <= 100) {
          this.rmqMessage =
            "The rock mass quality based on your input is Excellent";
          this.ImpMessage =
            "Open-Pit Mining,Tunneling and Drifting,Room and Pillar Mining,Sublevel Stoping,Cut and Fill Mining,Pillarless Mining,Longwall Mining";
          this.SuppMessage = "Rock Bolting,Shotcrete and Mesh,";
          this.ExcMessage =
            "Power stations, major road and railway tunnels, civil defence chambers, portal intersections,Underground nuclear power station, railway stations, sports and public facilities,Permanent mine openings, water tunnels for hydro(power high pressure penstocks),pilot tunnels, drifts and headings for large excavation";
        }
      },

      Q() {
        axios
          .post("/api/q_model", {
            RQD: this.RQDValue,
            Jn: this.JnValue,
            Jr: this.JnValue,
            Jr: this.JrValue,
            Ja: this.JaValue,
            Jw: this.JwValue,
            SRF: this.SRFValue,
          })
          .then((res) => {
            this.Q_Value_PredictedValue = res.data.prediction;
            console.log('predicted value: ' + this.Q_Value_PredictedValue)
            this.Post_Q();
            console.log(res.data);
            this.QValue =
              "Based on your input, the predicted Q value is " + this.Q_Value_PredictedValue.toFixed(2);
            this.NumQ = this.Q_Value_PredictedValue.toFixed(2);
          });
      },

      Q_value_analysis() {
        this.Q_Value_PredictedValue = this.NumQ;
        this.openQAanalysis = true;
        this.closeQAanalysis = false;
        if (this.Q_Value_PredictedValue <= 0 && this.Q_Value_PredictedValue < 10) {
          this.qAnalysMessage1 =
            "Indicates an extremely poor and unstable rock mass,";
          this.qAnalysMessage2 =
            "Severe support requirements are necessary to ensure safety during mining or tunneling,";
          this.qAnalysMessage3 = "High risk of rockfalls and ground collapses";
        } else if (this.Q_Value_PredictedValue > 10 && this.Q_Value_PredictedValue <= 20) {
          this.qAnalysMessage1 =
            "Suggests a weak rock mass with significant stability concerns,";
          this.qAnalysMessage2 =
            "Substantial support measures are needed for safe mining or tunneling";
          this.qAnalysMessage3 =
            "Increased risk of rockfalls and ground instability";
        } else if (this.Q_Value_PredictedValue > 20 && this.Q_Value_PredictedValue <= 40) {
          this.qAnalysMessage1 = "Signifies a moderately stable rock mass, .";
          this.qAnalysMessage2 =
            "Support requirements are moderate but should still be considered,";
          this.qAnalysMessage3 =
            "Reasonable conditions for mining or tunneling, with proper engineering measures";
        } else if (this.Q_Value_PredictedValue > 40 && this.Q_Value_PredictedValue <= 60) {
          this.qAnalysMessage = "Indicates a strong and stable rock mass,";
          this.qAnalysMessage2 = "Support requirements are generally low,";
          this.qAnalysMessage3 =
            "Favorable conditions for mining or tunneling with minimal support";
        } else if (this.Q_Value_PredictedValue <= 60) {
          this.qAnalysMessage1 =
            "Represents an exceptionally stable and strong rock mass,";
          this.qAnalysMessage2 = "Minimal to no support is typically required,";
          this.qAnalysMessage3 =
            "Ideal conditions for mining or tunneling operations";
        }
      },
      rmr_predicted:0,
      RMR() {
        axios
          .post("/api/rmr_model", {
            Q_Value: this.RMR_Q_Value,
          })
          .then((res) => {
            this.RMR_PredictedValue = res.data.prediction;
            this.rmr_predicted=this.RMR_PredictedValue.toFixed(2);

            this.Post_RMR()
            console.log(res.data);
            this.rmr_val =
              "Based on your input, the rock mass rating value is " + this.RMR_PredictedValue.toFixed(2);
          });
      },

      // ESR Value declaration
      EsrDesc: "",
      EsrVal: "",
      value_Esr: "",
      dictEsr: [
        "Temporary mine openings",
        "Permanent mine openings water tunnels for hydro power excluding high pressure penstocks pilot tunnels drifts and headings for large excavations",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers access tunnels",
        "Power stations major road and railway tunnels civil defence chambers portal intersections",
        "Underground nuclear power stations railway stations sports and public facilities factories",
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels"
        ],

      ESR() {
        axios
          .post("/api/esr_model", {
            ESR_Conditions: String(this.EsrDesc),
          })
          .then((res) => {
            console.log(res.data);
            this.ESR_PredictedValue = res.data.prediction[0];
            this.EsrVal =
              "Based on your input, the predicted Excavation Category value is " +
              res.data.prediction[0].toFixed(2);
              this.Post_ESR();
          });
      },

       // MUS value declarations
       MUSValue: 0,
       Q_Value: 0,
       ESR_VALUE: 0,

      MUS() {
        axios
          .post("/api/mus_model", {
            Q_Value: this.Q_Value,
            ESR_VALUE: this.ESR_VALUE,
          })
          .then((res) => {
            this.Maximum_unsupported_span = res.data.prediction.toFixed(2);
      
            this.Post_MUS()
            
            this.MUSValue = parseInt(Maximum_unsupported_span);
            console.log(res.data);
            this.MUSValue = "Based on your input, the predicted Maximum Unsupported span value is " + this.Maximum_unsupported_span + "m";
            console.log('I am working: ' + this.MUSValue)
          });
      },

      // Recommednation function declaration for MUS
      get_recommdendation_message: "",
      openRec: false,
      closeRec: true,

      get_recommendtions_mus() {
        this.openRec = true;
        this.closeRec = false;
      },
      refresh() {
        this.EsrDesc="";
        this.EsrVal="";
        this.JaVal = "";
        this.JwVal = "";
        this.JrVal = "";
        this.JnVal = "";
        this.EsrVal = "";
        this.NumQ = "";
        this.qAnalysMessage1 = "";
        this.qAnalysMessage2 = "";
        this.qAnalysMessage3 = "";
        this.ExcMessage = "";
        this.SuppMessage = "";
        this.ImpMessage = "";
        this.rmr_val = "";
        this.SRFValue = "";
        this.Virgin_stress_ratio = "";
        this.srf_value = "";
        this.Q_Value = "";
        this.RQDValue = "";
        this.JnValue = "";
        this.JnValue = "";
        this.JrValue = "";
        this.JaValue = "";
        this.JwValue = "";
        this.JnDesc = "";
        this.JaDesc = "";
        this.JwDesc = "";
        this.JrDesc = "";
        this.QValue = "";
        this.JwVal = "";
        this.Depth_from_surface = "";
        this.depth_to_surface = "";
        this.true_thickness = "";
        this.hardness_property = "";
        this.rmqMessage = "";
        this.RQDValue = "";
        this.MUSValue = "";
        this.ESR_VALUE = "";
        this.NumRQD = "";
        this.rmqMessage = "",
          this.Depth = "",
          this.UCS = "",
          this.Density = "",
          this.ucsvsr_value = "";
      },


      // Toggling between the historical table logic 
      UCS_VSR_HISTORY:false,
      SRF_HISTORY:false,
      Jn_HISTORY:false,
      Ja_HISTORY:false,
      Jr_HISTORY:false,
      Jw_HISTORY:false,
      ROCK_QUALITY_DESIGNATOR:false,
      ESR_HISTORY:false,
      ROCK_QUALITY_INDEX:false,
      ROCK_MASS_RATING:false,
      MAXIMUM_STABLE_UNSUPPORTED_SPAN_HISTORY:false,
      COMBINED_HISTORICAL_RECORD: false,

      init() {
        this.historicalData();
        this.getUCS();
        this.getSRF();
        this.getJN();
        this.getJr();
        this.getJa();
        this.getJw();
        this.getrqd();
        this.get_Q();
        this.get_RMR();
        this.get_ESR();
        this.get_MUS();
      },

  
      // WORK WITH HISSTORICAL DATA
      history_list: [],
      MainID: '',
      EditID: '',
      UCS_Hist: [],
      use_UCS: '',
      SRF_Hist: [],
      JnHist: [],
      JrHist: [],
      JaHist: [],
      JwHist: [],
      use_Depth_To: '',
      RQD_Hist: [],
      Q_Hist: [],
      use_Jn: '',
      use_Jr: '',
      use_Ja: '',
      use_Jw: '',
      use_SRF: '',
      use_RQD: '',
      use_Q_Value: '',
      RMR_Hist: [],
      ESR_Hist: [],
      MUS_Hist: [],
      use_ESR_Value: '',

      historicalData() {
        axios.get("/api/historical_data/")
          .then((res) => {
            console.log(res.data.historical_data);
            this.history_list = res.data.historical_data;
            console.log(this.history_list);
            // this.use_Depth_To = res.data.historical_data[0].Depth;
            // console.log("Depth poi" + this.use_Depth_To);
            
          });
      },
      // GetUCS_virginStress
      getUCS() {
        axios.get("/api/get_ucs_model")
          .then((res) => {
            this.UCS_Hist = res.data.historical_data;
            console.log("lol" + this.UCS_Hist);
            console.log(res.data)

            this.use_Depth_To = res.data.historical_data[0].Depth_To;
            console.log("Depth_To", this.use_Depth_To)
            console.log("use_Depth_To", this.use_use_Depth_To)
            console.log("Depth", this.use_Depth)

          });
      },

      Post_UCS() {
        axios.post('/api/ucs_model_save',
          {
            Depth_To: this.Depth,
            Density: this.Density,
            UCS_Mpa: this.UCS,
            UCS_PredictedValue: this.UCS_Predicted,

          })
          .then((res) => {
            console.log(res.data);
            // this.use_Depth_To = res.data.historical_data[0].Depth_To;


            console.log('predicted value: ' + this.UCS_Predicted)
            this.getUCS();
          })
      },

      // WORK with SRF [get and post data to database] depth_to_surface
      getSRF() {
        axios.get("/api/get_srf_model")
          .then((res) => {
            this.SRF_Hist = res.data.historical_data;
            this.use_UCS = res.data.historical_data[0].UCS_PredictedValue;
            console.log("In the Get function:",this.SRF_Hist);
          });
      },
  
      Post_SRF() {
        console.log("Hopefully:",this.Virgin_stress_ratio)
        axios.post('/api/srf_model_save',
          {

            UCS_PredictedValue: this.Virgin_stress_ratio,
            SRF_PredictedValue: this.srf_predicted,


          })
          .then((res) => {
            console.log(res.data);
            console.log('predicted value: ' + this.srf_predicted)
            this.getSRF();
          })
      },

      //JN MODEL
      getJN() {
        axios.get('/api/get_Jn_model')
          .then((res) => {
            console.log(res.data)
            this.JnHist = res.data.Jn_historical_data
          })
      },

      Post_Jn() {
        axios.post('/api/Jn_model_save', {
          Jn_description: this.JnDesc,
          Jn_PredictedValue: this.Jn_PredictedValue,
        })
          .then((res) => {
            console.log("went through...")
            console.log(res.data);
            
            this.getJN()
          })
      },
      //Jr MODEL
      getJr() {
        axios.get('/api/get_Jr_model')
          .then((res) => {
            console.log(res.data)
            this.JrHist = res.data.Jr_historical_data
          })
      },

      Post_Jr() {
        axios.post('/api/Jr_model_save', {
          Jr_description: this.JrDesc,
          Jr_PredictedValue: this.Jr_PredictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJr()
          })
      },
      //Ja MODEL
      getJa() {
        axios.get('/api/get_Ja_model')
          .then((res) => {
            console.log(res.data)
            this.JaHist = res.data.Ja_historical_data
          })
      },

      Post_Ja() {
        axios.post('/api/Ja_model_save', {
          Ja_description: this.JaDesc,
          Ja_PredictedValue: this.Ja_PredictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJa()
          })
      },
      //Jw MODEL
      getJw() {
        axios.get('/api/get_Jw_model')
          .then((res) => {
            console.log(res.data)
            this.JwHist = res.data.Jw_historical_data
          })
      },

      Post_Jw() {
        axios.post('/api/Jw_model_save', {
          Jw_description: this.JwDesc,
          Jw_PredictedValue: this.Jw_PredictedValue,
        })
          .then((res) => {
            console.log(res.data);
            this.getJw()
          })
      },
      //rqd MODEL
      getrqd() {
        axios.get('/api/get_RQD_model')
          .then((res) => {
            console.log(res.data)
            this.RQD_Hist = res.data.rqd_historical_data
          })
      },

      Post_rqd() {
        axios.post('/api/RQD_model_save', {
          Depth_From: this.Depth_from_surface,
          Depth_To: this.depth_to_surface,
          True_Thickness: this.true_thickness,
          Hardness: this.hardness_property,
          RQD_PredictedValue: this.RQD_PredictedValue.toFixed(2)
        })
          .then((res) => {
            console.log(res.data);
            console.log('RQD VALUE IS: ' + this.RQD_PredictedValue);
            this.getrqd();
          })
      },
      //Q Value MODEL
      get_Q() {
        axios.get('/api/get_Q_model')
          .then((res) => {
            console.log(res.data)
            console.log('JN VAL: ' + res.data.Q_historical_data[0].Jn_PredictedValue);

            this.use_Jn = res.data.Q_historical_data[0].Jn_PredictedValue;
            this.use_Jr = res.data.Q_historical_data[0].Jr_PredictedValue;
            this.use_Ja = res.data.Q_historical_data[0].Ja_PredictedValue;
            this.use_Jw = res.data.Q_historical_data[0].Jw_PredictedValue;
            this.use_SRF = res.data.Q_historical_data[0].SRF_PredictedValue;
            this.use_RQD = res.data.Q_historical_data[0].RQD_PredictedValue;
            
            this.Q_Hist = res.data.Q_historical_data;

          })
      },

      
      Post_Q() {
        axios.post('/api/Q_model_save', {
          RQD_PredictedValue: this.RQDValue,
          Jn_PredictedValue: this.JnValue,
          Jr_PredictedValue: this.JrValue,
          Ja_PredictedValue: this.JaValue,
          Jw_PredictedValue: this.JwValue,
          SRF_PredictedValue: this.SRFValue,
          
          Q_Value_PredictedValue: this.Q_Value_PredictedValue

        })
          .then((res) => {
            console.log(res.data);
            console.log('Q VALUE IS: ' + this.Q_Value_PredictedValue);
            this.get_Q();
          })
      },

      //RMR Value MODEL
      get_RMR() {
        axios.get('/api/get_RMR_model')
          .then((res) => {
            console.log(res.data)
            // this.use_Q_Value = res.data.RMR_historical_data[0].Q_Value_PredictedValue;
            
            this.RMR_Hist = res.data.RMR_historical_data;

          })
      },

      Post_RMR() {
        console.log(this.rmr_val)
        axios.post('/api/RMR_model_save', {          
          RMR_PredictedValue: this.rmr_predicted,
          Q_Value_PredictedValue:this.RMR_Q_Value,

        })
          .then((res) => {
            console.log(res.data);
            console.log('RMR VALUE IS: ' + this.RMR_PredictedValue);
            this.get_RMR();
          })
      },

        //ESR Value MODEL
        get_ESR() {
          axios.get('/api/get_ESR_model')
            .then((res) => {
              console.log(res.data)
  
  
              this.use_Q_Value = res.data.ESR_historical_data[0].Q_Value_PredictedValue;
              
              this.ESR_Hist = res.data.ESR_historical_data;
  
            })
        },
  
        Post_ESR() {
          axios.post('/api/ESR_model_save', {    
            ESR_Conditions: this.EsrDesc,
            ESR_PredictedValue: this.ESR_PredictedValue
          })
            .then((res) => {
              console.log(res.data);
              console.log('ESR VALUE IS: ' + this.ESR_PredictedValue);
              this.get_ESR();
            })
        },
         //ESR Value MODEL
         get_MUS() {
          axios.get('/api/get_MUS_model')
            .then((res) => {
              console.log(res.data)
  
              
              this.use_Q_Value = res.data.MUS_historical_data[0].Q_Value_PredictedValue;
              this.use_ESR_Value = res.data.MUS_historical_data[0].ESR_PredictedValue;
              
              this.MUS_Hist = res.data.MUS_historical_data;
              // this.MUSValue = "Based on your input, the predicted Maximum Unsupported span value is " + this.Maximum_unsupported_span / 2 + "m";
              // console.log('I am working: ' + this.MUSValue)

  
            })
        },
  
        Post_MUS() {
          axios.post('/api/MUS_model_save', { 
            Q_Value_PredictedValue: this.Q_Value,
            ESR_PredictedValue: this.ESR_VALUE,        
            Maximum_unsupported_span: this.Maximum_unsupported_span,
  
          })
            .then((res) => {
              console.log(res.data);
              this.MUSValue = "Based on your input, the predicted Maximum Unsupported span value is " + this.Maximum_unsupported_span  + "m";
              console.log('I am working: ' + this.MUSValue)

              console.log('MUS VALUE IS: ' + this.Maximum_unsupported_span);
              this.get_MUS();

            })
        }


    };
  });
});