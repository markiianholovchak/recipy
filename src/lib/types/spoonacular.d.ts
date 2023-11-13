type SpoonacularMetric = {
    amount: number;
    unitLong: string;
    unitShort: string;
};

type SpoonacularProductMatch = {
    id: number;
    title: string;
    description: string;
    price: string;
    imageUrl: string;
    averageRating: number;
    ratingCount: number;
    score: number;
    link: string;
};

type SpoonacularWinePairing = {
    pairedWines: string[];
    pairingText: string;
    productMatches: ProductMatch[];
};

type SpoonacularExtendedIngredient = {
    aisle: string;
    amount: number;
    consistency: string;
    id: number;
    image: string;
    measures: {
        metric: SpoonacularMetric;
        us: SpoonacularMetric;
    };
    meta: string[];
    name: string;
    original: string;
    originalName: string;
    unit: string;
};

type SpoonacularRecipeInformation = RecipeInformation & {
    imageType: string;
    license: string;
    sourceName: string;
    sourceUrl: string;
    spoonacularSourceUrl: string;
    healthScore: number;
    spoonacularScore: number;
    pricePerServing: number;
    cheap: boolean;
    creditsText: string;
    diets: string[];
    gaps: string;
    ketogenic: boolean;
    lowFodmap: boolean;
    occasions: string[];
    sustainable: boolean;
    veryHealthy: boolean;
    veryPopular: boolean;
    whole30: boolean;
    weightWatcherSmartPoints: number;
    winePairing: SpoonacularWinePairing;
    aggregateLikes: number;
};

type SpoonacularRecipeSearchEntity = {
    id: number;
    title: string;
    image: string;
    imageType: string;
};

type SpoonacularRecipeSearchResult = {
    offset: number;
    number: number;
    results: SpoonacularRecipeInformation[];
    totalResults: number;
};
