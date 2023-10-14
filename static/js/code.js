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
      Q_Value: "",
      rmr_val: "",
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
      Q_value: 0,
      NumQ: "",

      // Analysys function based on the Q value declarations
      qAnalysMessage1: "",
      qAnalysMessage2: "",
      qAnalysMessage3: "",
      openQAanalysis: false,
      closeQAanalysis: true,

      // SRF value declarations
      Virgin_stress_ratio: "",
      srf_value: "",

      // MUS value declarations
      MUSValue: "",
      Q_Value: "",
      ESR_VALUE: "",

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
            this.getUCS();
            console.log(res.data);
            let val = res.data.prediction;
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            this.ucsvsr_value =
              "Based on your input, the ratio of the Uniaxial compressive strength to the virgin stress is " +
              val.toFixed(2);
          });
      },

      SRF() {
        axios
          .post("/api/srf_model", {
            Virgin_stress_ratio: this.Virgin_stress_ratio,
          })
          .then((res) => {
            console.log(res.data);
            let val = res.data.prediction;
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            this.srf_value =
              "Based on your input, the predicted Stress Reduction value is " +
              val;
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
            this.JnVal =
              "Based on your input, the predicted Jn value is " +
              res.data.prediction[0];
          });
      },

      // 4. Jn frontend function definition
      JrDescription() {
        axios
          .post("/api/Jr_model", {
            Jr_Description: String(this.JrDesc),
          })
          .then((res) => {
            this.JrVal =
              "Based on your input, the predicted Joint Orientation (Jr value) is " +
              res.data.prediction[0];
          });
      },

      // 5. Ja frontend function definition

      JaDescription() {
        axios
          .post("/api/Ja_model", {
            Ja_Description: String(this.JaDesc),
          })
          .then((res) => {
            this.JaVal =
              "Based on your input, the predicted Joint Alteration (Ja value) is " +
              res.data.prediction[0];
          });
      },

      // 6. Jw frontend function definition

      JwDescription() {
        axios
          .post("/api/Jw_model", {
            Jw_Description: String(this.JwDesc),
          })
          .then((res) => {
            this.JwVal =
              "Based on your input, the predicted Joint Water Reduction (Jw value) is " +
              res.data.prediction[0];
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
            let val = res.data.prediction;
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            this.rmq_value = parseInt(val);
            this.RQDValue =
              "Based on your input, the predicted RQD value is " +
              val.toFixed(2) +
              "%";
            this.NumRQD = val.toFixed(2);
          });
      },
      rock_mass_quality() {
        this.RQDValue = "";
        this.openRockMassQuality = true;
        this.closeRockMassQuality = false;
        val = this.rmq_value;
        if (val < 25 && val > 0) {
          this.rmqMessage =
            "The rock mass quality based on your input is very poor.";
          this.ImpMessage =
            "Tunneling, Room and Pillar, Cut and Fill, Sub-level Stoping, Block Caving, Drift and Fill,Hydraulic Fracturing";
          this.SuppMessage = "bolting, shotcrete, or mesh";
          this.ExcMessage =
            "Temporal mine openings,Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels";
        } else if (val > 25 && val <= 50) {
          this.rmqMessage = "The rock mass quality based on your input is poor";
          this.ImpMessage =
            "Open-Pit Mining,Room and Pillar Mining,Cut and Fill Mining,Sublevel Stoping,Block Caving,Room and Bench Mining,Drift Mining,Hydraulic Fracturing and Grouting";
          this.SuppMessage =
            "Rock Bolting,Mesh and Shotcrete,Cable Bolting,Ground Monitoring,Rock Reinforcement,Rib and Roof Bolting,Rockfall Protection Systems,Shotcrete Lining,Grouting,Rockfall Drapery";
          this.ExcMessage =
            "Temporal mine openings,Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels,Power stations, major road and railway tunnels, civil defence chambers, portal intersections";
        } else if (val > 50 && val <= 75) {
          this.rmqMessage =
            "The rock mass quality based on your input is fair.";
          this.ImpMessage =
            "Open Pit Mining,Room and Pillar Mining,Cut and Fill Mining,Block Caving,Sublevel Stoping,Benching,Heap Leach Mining,";
          this.SuppMessage =
            "Rock Bolting,Shotcrete (Sprayed Concrete),Mesh and Wire Mesh,Cable Bolting,Grouting,Arch and Beam Supports,Rock Reinforcement Mesh,Rock Grillage or Rock Bolster,Ground Monitoring and Instrumentation";
          this.ExcMessage =
            "Storage rooms, water treatment plants, minor road and railway tunnels, surge chambers and access tunnels,Power stations, major road and railway tunnels, civil defence chambers, portal intersections";
        } else if (val > 75 && val <= 90) {
          this.rmqMessage = "The rock mass quality based on your input is Good";
          this.ImpMessage =
            "Open-Pit Mining,Underground Room and Pillar Mining,Block Caving,Sublevel Stoping,Cut and Fill Mining,Shaft Sinking,Room and Bench Mining,Drift Mining,Quarrying";
          this.SuppMessage =
            "Rock Bolting,Shotcrete,Mesh and Meshing Systems,Cable Bolting,Grouting,Reinforced Shotcrete,Rib and Lagging Support,Rockfall Protection Systems,Anchor Systems,Grout Curtain";
          this.ExcMessage =
            "Power stations, major road and railway tunnels, civil defence chambers, portal intersections,Underground nuclear power station, railway stations, sports and public facilities,Permanent mine openings, water tunnels for hydro(power high pressure penstocks),pilot tunnels, drifts and headings for large excavation";
        } else if (val > 90 && val <= 100) {
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
            let val = res.data.prediction;
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            console.log(res.data);
            this.QValue =
              "Based on your input, the predicted ROck Quality Index(Q) value is " +
              val;
            this.NumQ = val;
          });
      },

      Q_value_analysis() {
        val = this.Q_value;
        this.openQAanalysis = true;
        this.closeQAanalysis = false;
        if (val <= 0 && val < 10) {
          this.qAnalysMessage1 =
            "Indicates an extremely poor and unstable rock mass,";
          this.qAnalysMessage2 =
            "Severe support requirements are necessary to ensure safety during mining or tunneling,";
          this.qAnalysMessage3 = "High risk of rockfalls and ground collapses";
        } else if (val > 10 && val <= 20) {
          this.qAnalysMessage1 =
            "Suggests a weak rock mass with significant stability concerns,";
          this.qAnalysMessage2 =
            "Substantial support measures are needed for safe mining or tunneling";
          this.qAnalysMessage3 =
            "Increased risk of rockfalls and ground instability";
        } else if (val > 20 && val <= 40) {
          this.qAnalysMessage1 = "Signifies a moderately stable rock mass, .";
          this.qAnalysMessage2 =
            "Support requirements are moderate but should still be considered,";
          this.qAnalysMessage3 =
            "Reasonable conditions for mining or tunneling, with proper engineering measures";
        } else if (val > 40 && val <= 60) {
          this.qAnalysMessage = "Indicates a strong and stable rock mass,";
          this.qAnalysMessage2 = "Support requirements are generally low,";
          this.qAnalysMessage3 =
            "Favorable conditions for mining or tunneling with minimal support";
        } else if (val <= 60) {
          this.qAnalysMessage1 =
            "Represents an exceptionally stable and strong rock mass,";
          this.qAnalysMessage2 = "Minimal to no support is typically required,";
          this.qAnalysMessage3 =
            "Ideal conditions for mining or tunneling operations";
        }
      },
      RMR() {
        axios
          .post("/api/rmr_model", {
            Q_Value: this.Q_Value,
          })
          .then((res) => {
            let val = res.data.prediction;
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            console.log(res.data);
            this.rmr_val =
              "Based on your input, the rock mass rating value is " + val;
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
        "Storage rooms water treatment plants minor road and railway tunnels surge chambers  access tunnels",
        ],

      ESR() {
        axios
          .post("/api/esr_model", {
            ESR_Conditions: String(this.EsrDesc),
          })
          .then((res) => {
            // console.log(res.data);
            this.EsrVal =
              "Based on your input, the predicted Excavation Category value is " +
              res.data.prediction[0];
          });
      },

      MUS() {
        axios
          .post("/api/mus_model", {
            Q_Value: this.Q_Value,
            ESR_VALUE: this.ESR_VALUE,
          })
          .then((res) => {
            let val = res.data.prediction;
            // val = val.split("[")[1];
            // val = val.split("]")[0];
            this.MUS_value = parseInt(val);
            console.log(res.data);
            this.MUSValue =
              "Based on your input, the predicted Maximum Unsupported span value is " +
              val / 2 +
              "m";
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






      init() {
        this.historicalData();
        this.getUCS();
        this.getSRF();
      },
      // WORK WITH HISSTORICAL DATA
      history_list: [],
      UCS_Hist: [],
      SRF_Hist: [],

      historicalData() {
        axios.get("/api/historical_data/").then((res) => {
          console.log(res.data);
          this.history_list = res.data.historical_data;
          console.log(this.history_list);
        });
      },
      // GetUCS_virginStress
      getUCS() {
        axios.get("/api/UCS_virginstress/").then((res) => {
          this.UCS_Hist = res.data.UCS_virginstress;
          console.log(this.UCS_Hist);
          console.log(res.data.UCS_virginstress[1].Density);
        });
      },

      getSRF() {
        axios.get("api/SRF_hist/").then((res) => {
          this.SRF_Hist = res.data.SRF_hist;
          console.log(res.data);
        });
      },
    };
  });
});
