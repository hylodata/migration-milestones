var config = {
    style: 'mapbox://styles/gbby/cl4g7cfhv001n14qxgenegeqn',
    accessToken: 'pk.eyJ1IjoiZ2JieSIsImEiOiJjbDRnMnhpcWowOTZ0M2ltYmVidmFlYzUyIn0.YMvE-Zv6jfxhACw69xOvLQ',
    showMarkers: false,
    theme: 'light',
    use3dTerrain: true,
    title: "Patience's Journey",
    subtitle: '',
    byline: '',
    footer: 'Source: CERC Migration, 2022. Data from <a href="http://losingtime.ca">Toronto Metropolitan University</a>',
    chapters: [{
            id: 'patience',
            alignment: 'full',
            title: '',
            image: './images/work.jpg',
            description: '“After I graduated from secondary school in 2003, I decided to travel to Nigeria because my uncle who lived in Lagos offered me a place to stay and a job as an apprentice in a tailor shop.”',
            location: {
                center: [0.47773, 7.15319],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00,
	        speed: 0.2,
                curve: 1		
            },
            // onChapterEnter: [],
            // onChapterExit: [// {
            // //     layer: 'glaciernp-boundary',
            // //     opacity: 0
            // // }
	    // 		   ]
        },
        {
            id: 'hohoe2003',
            alignment: 'left',
            title: 'Hohoe, Volta Region, Ghana',
            image: '',
            description: "In 2003, Patience left Hohoe  Municipality in Ghana's Volta Region, Ghana. She traveled by bus to Lomé, Togo.",
            // location: {
            //     center: [0.47773, 7.15319],
            //     zoom: 10.00,
            //     pitch: 45.00,
            //     bearing: -40.00,
	    //     speed: 0.5,
            //     curve: 1
            // },
            // onChapterEnter: [],
            // onChapterExit: [
            //     // {
            //     //     layer: 'gnpglaciers-2015',
            //     //     opacity: 0
            //     // }
            // ]
        },
	               {
            id: 'lome2003',
            alignment: 'left',
            title: 'Lome, Togo',
            image: '',
            description: "The bus trip to Lomé took...",
            location: {
                center: [1.22540, 6.13253],
                zoom: 15.00,
                pitch: 45.00,
                bearing: 0.00,
	        speed: 0.5,
                curve: 1		
            },
            // onChapterEnter: [],
            // onChapterExit: [
            //     // {
            //     //     layer: 'gnpglaciers-2015',
            //     //     opacity: 0
            //     // }
            // ]
        }
    ]
}
