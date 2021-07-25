import { Globals } from './utils/AppConfig';

interface IThemeData {
	name: string;
	userCode: string;
	themeLink: string;
	customRuleLink?: string;
	html: string;
	declaredData: IThemeParamData;
	typings?: ITypeParamData;
}

export interface IThemeParamData {
	[key: string]:
		| string
		| boolean
		| ({ value: string } | IThemeParamData)[]
		| IThemeParamData;
}

export interface ITypeParamData {
	[key: string]:
    | ITypeParamData[]
		| 'color'
		| 'array'
		| 'list'
		| 'check'
		| 'long'
		| ITypeParamData;
}

export const themeData: IThemeData[] = [];

themeData.push({
	name: 'Test Case',
	userCode: 'safe',
	themeLink: '',
	declaredData: {
		name: 'Carter',
		color: '#333333',
		profile: {
			name: 'Caret',
			bool: true,
			adjectives: { first: '', second: '' },
		},
	},
	typings: { color: 'color', profile: { bool: 'check' } },
	html: '<div>Hello my name is {{ name }}.</div>',
});

themeData.push({
	name: 'Drivers License',
	userCode: '8Byte',
	themeLink: 'https://toyhou.se/11865821.-f2u-drivers-license',
	declaredData: {
		backgroundUrl: '/img/placeholder-background.png',
		profile: {
			img: '/img/placeholder-solid.png',
			name: 'Name',
			pronouns: 'he/they',
			species: 'species',
			owner: '@owner',
			birthDate: 'XX/XX/XXXX',
			height: 'XX"XX\'',
			occupation: 'occupation',
			designer: '@designer',
		},
		quote: 'Quote goes here...',
		youtubeCode: 'nx-qpEMUzes',
	},
	typings: {},
	html: `<div class="container" style="max-width: 550px;">
  <!-- ${Globals.watermark} -->
  <!--- the license --->
  <div class="card border-0 bg-faded">
    <!--- faded background image --->
    <div class="card border-0 h-100 w-100" style="position: absolute; background:url({{ backgroundUrl }}); background-size: cover; opacity: 0.3;"></div>
    <div style="position: absolute; right: -40px; top: -20px; z-index: 100;">
      <div class="container">
        <div style="position: absolute; top: 5px; left: 25px; z-index: 101;">
          <iframe class="flex-fill" style="width:100%;height:50px;width:50px; border-radius: 50%; opacity: 0.01;" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="https://www.youtube.com/embed/{{ youtubeCode }}"></iframe>
        </div>
        <span class="fa-stack fa-2x">
          <i class="fas fa-circle fa-stack-2x text-primary"></i>
          <i class="fas fa-music fa-stack-1x text-light fa-spin"></i>
        </span>
      </div>
    </div>
    <!--- content --->
    <div class="row no-gutters p-3">
      <div class="col-md-4 p-1">
        <!--- profile picture image --->
        <div class="card border-0 w-100" style="background:url({{ profile.img }}); background-size: cover; height: 250px;"></div>
      </div>
      <div class="col-md-8 p-3">
        <div class="row no-gutters">
          <!--- the basics --->
          <div class="col-2 p-1">
            <i class="far fa-user text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.name }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-birthday-cake text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.birthDate }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-venus-mars text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.pronouns }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-ruler text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.height }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-dna text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.species }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-briefcase text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.occupation }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-home text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.owner }}
          </div>
          <div class="col-2 p-1">
            <i class="far fa-pencil text-primary"></i>
          </div>
          <div class="col-4 p-1">
            {{ profile.designer }}
          </div>
        </div>
        <hr>
        <!--- quote section --->
        <div class="overflow-auto" style="max-height: 75px;">
          <span>
            {{ quote }}
          </span>
        </div>
      </div>
    </div>
  </div>
  <!-- ${Globals.watermark} -->
  <div class="pull-right"><a class="tooltipster" title="code credits" href="https://toyhou.se/8byte"><i class="fas fa-crow"></i></a></div>
  </div>`,
});

themeData.push({
	name: 'Luna',
	userCode: '8Byte',
	themeLink: 'https://toyhou.se/11686775.-f2u-luna/11686811.-8-luna-css',
	declaredData: {
		name: 'Luna',
		colors: {
			one: '#000',
			two: '#000',
			three: '#000',
			four: '#000',
		},
		profile: {
			nickname: 'Nickname',
			gender: 'Gender',
			pronouns: 'Pronouns',
			birthday: 'B-day',
			species: 'Species',
			occupation: 'Occupation',
			residence: 'Residence',
		},
		summary:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
		backstory:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
		personality:
			"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
		photos: {
			cutieMark: '/img/placeholder-transparent.png',
			banner: '/img/placeholder-solid.png',
			profile: '/img/placeholder.png',
		},
		relationships: {
			one: {
				name: 'Name',
				relationship: 'Relationship',
				link: 'https://toyhou.se/',
				imageUrl: '/img/placeholder.png',
			},
			two: {
				name: 'Name',
				relationship: 'Relationship',
				link: 'https://toyhou.se/',
				imageUrl: '/img/placeholder.png',
			},
			three: {
				name: 'Name',
				relationship: 'Relationship',
				link: 'https://toyhou.se/',
				imageUrl: '/img/placeholder.png',
			},
			four: {
				name: 'Name',
				relationship: 'Relationship',
				link: 'https://toyhou.se/',
				imageUrl: '/img/placeholder.png',
			},
		},
		designNotes: [{ value: 'Design Note' }, { value: 'Design Note 2' }],
	},
	typings: {
		colors: {
			one: 'color',
			two: 'color',
			three: 'color',
			four: 'color',
		},
		summary: 'long',
		backstory: 'long',
		personality: 'long',
	},
	html: `<div class="container p-0 w-100">
  <!--- ${Globals.watermark} --->
  <!--- header image --->
  <div class="p-1">
    <div
      class="container w-100"
      style="
        background: url({{photos.banner}});
        background-size: cover;
        background-position: center;
        height: 250px;
      "
    ></div>
  </div>
  <!--- palette --->
  <div class="row no-gutters" style="flex-wrap: wrap">
    <div class="col p-1">
      <div
        style="background: {{ colors.one }}; height: 50px; min-width: 150px;"
      ></div>
    </div>
    <div class="col p-1">
      <div
        style="background: {{ colors.two }}; height: 50px; min-width: 150px;"
      ></div>
    </div>
    <div class="col p-1">
      <div
        style="background: {{ colors.three }}; height: 50px; min-width: 150px;"
      ></div>
    </div>
    <div class="col p-1">
      <div
        style="background: {{ colors.four }}; height: 50px; min-width: 150px;"
      ></div>
    </div>
  </div>
  <!--- main content --->
  <div class="row no-gutters">
    <div class="order-md-1 order-1 col-md-3 col-6 p-1">
      <!--- profile picture --->
      <div
        class="w-100 mb-2"
        style="
          background: url({{ photos.profile }});
          background-size: cover;
          padding-top: 100%;
        "
      ></div>
      <!--- name --->
      <div class="container p-2 mb-2 bg-left bg-faded">
        <h1>{{ name }}</h1>
      </div>
      <!--- info boxes --->
      <div class="container overflow-auto p-2 mb-2" style="height: 260px">
        <!--- info 1 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Nickname
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.nickname }}</strong>
          </div>
        </div>
        <!--- info 2 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Gender
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.gender }}</strong>
          </div>
        </div>
        <!--- info 3 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Pronouns
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.pronouns }}</strong>
          </div>
        </div>
        <!--- info 4 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Birthday
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.birthday }}</strong>
          </div>
        </div>
        <!--- info 5 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Species
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.species }}</strong>
          </div>
        </div>
        <!--- info 6 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Occupation
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.occupation }}</strong>
          </div>
        </div>
        <!--- info 7 --->
        <div class="row no-gutters mb-1">
          <div class="order-md-1 order-2 col-md-6 col-12 p-1">
            Residence
          </div>
          <div
            class="
              order-md-2 order-1
              col-md-6 col-12
              p-1
              text-right
              bg-right bg-faded
            "
          >
            <strong>{{ profile.residence }}</strong>
          </div>
        </div>
        <!--- end info --->
      </div>
    </div>
    <div class="order-md-2 order-3 col-md-6 col-12 p-1">
      <!--- summary --->
      <div class="container p-2 mb-2" style="height: 181px">
        <h1>i. summary</h1>
        <div class="overflow-auto" style="height: 150px">
          {{ summary
            .split('\\n')
            .map(
              (c) => \`
          <p>\${c}</p>
          \`
            )
            .join('\\n') }}
        </div>
      </div>
      <!--- backstory --->
      <div class="container p-2 mb-2" style="height: 181px">
        <h1>ii. backstory</h1>
        <div class="overflow-auto" style="height: 150px">
          {{ backstory
            .split('\\n')
            .map(
              (c) => \`
          <p>\${c}</p>
          \`
            )
            .join('\\n') }}
        </div>
      </div>
      <!--- personality --->
      <div class="container p-2 mb-2" style="height: 181px">
        <h1>iii. personality</h1>
        <div class="overflow-auto" style="height: 150px">
          {{personality
            .split('\\n')
            .map(
              (c) => \`
          <p>\${c}</p>
          \`
            )
            .join('\\n')}}
        </div>
      </div>
    </div>
    <div class="order-md-3 order-2 col-md-3 col-6 p-1">
      <div class="row no-gutters">
        <!--- design notes --->
        <div
          class="order-md-1 order-3 container overflow-auto p-2 mb-2"
          style="height: 260px"
        >
          <ul class="list-unstyled" style="font-size: 18px">
            {{designNotes
              .map(
                (item) => \`
            <li><i class="fas fa-moon"></i> \${item.value}</li>
            \`
              )
              .join('\\n')}}
          </ul>
        </div>
        <!--- cutie mark --->
        <div
          class="
            order-md-2 order-1
            container
            p-2
            mb-2
            bg-left bg-faded
          "
        >
          <h1>Cutie Mark</h1>
        </div>
        <div
          class="order-md-3 order-2 w-100 mb-2"
          style="
            background: url({{photos.cutieMark}});
            background-size: cover;
            padding-top: 100%;
          "
        ></div>
      </div>
    </div>
  </div>
  <!--- relationship --->
  <div class="row no-gutters">
    <!--- relation 1 --->
    <div class="col p-1" style="min-width: 150px; max-width: 300px">
      <a href="{{relationships.one.link}}">
        <div class="text-right p-1 bg-left bg-faded text-faded">
          <h3>{{relationships.one.name}}</h3>
        </div>
        <img
          class="w-100"
          src="{{relationships.one.imageUrl}}"
          style="padding-top: 0"
        />
        <div class="p-1 bg-right bg-faded">
          <h3>{{relationships.one.relationship}}</h3>
        </div>
      </a>
    </div>
    <!--- relation 2 --->
    <div class="col p-1" style="min-width: 150px; max-width: 300px">
      <a href="{{relationships.two.link}}">
        <div class="text-right p-1 bg-left bg-faded text-faded">
          <h3>{{relationships.two.name}}</h3>
        </div>
        <img
          class="w-100"
          src="{{relationships.two.imageUrl}}"
          style="padding-top: 0"
        />
        <div class="p-1 bg-right bg-faded">
          <h3>{{relationships.two.relationship}}</h3>
        </div>
      </a>
    </div>
    <!--- relation 3 --->
    <div class="col p-1" style="min-width: 150px; max-width: 300px">
      <a href="{{relationships.three.link}}">
        <div class="text-right p-1 bg-left bg-faded text-faded">
          <h3>{{relationships.three.name}}</h3>
        </div>
        <img
          class="w-100"
          src="{{relationships.three.imageUrl}}"
          style="padding-top: 0"
        />
        <div class="p-1 bg-right bg-faded">
          <h3>{{relationships.three.relationship}}</h3>
        </div>
      </a>
    </div>
    <!--- relation 4 --->
    <div class="col p-1" style="min-width: 150px; max-width: 300px">
      <a href="{{relationships.four.link}}">
        <div class="text-right p-1 bg-left bg-faded text-faded">
          <h3>{{relationships.four.name}}</h3>
        </div>
        <img
          class="w-100"
          src="{{relationships.four.imageUrl}}"
          style="padding-top: 0"
        />
        <div class="p-1 bg-right bg-faded">
          <h3>{{relationships.four.relationship}}</h3>
        </div>
      </a>
    </div>
    <!--- end relations --->
  </div>
  <div class="pull-right">
    <!--- ${Globals.watermark} --->
    <a
      class="tooltipster"
      title="layout credits"
      href="https://toyhou.se/TNR"
      ><i class="fas fa-star"></i
    ></a>
    /
    <a
      class="tooltipster"
      title="code credits"
      href="https://toyhou.se/8byte"
      ><i class="fas fa-crow"></i
    ></a>
  </div>
</div>`,
});

themeData.push({
	name: 'View',
	userCode: 'Togo',
	themeLink: 'https://toyhou.se/5295821.-03-view',
	declaredData: {
		accentColor: '#ffb2fb',
		banner: {
			image: '/img/placeholder-background.png',
			accentColorCopy: true,
		},
		sidebar: {
			image: '/img/placeholder.png',
			name: 'Name LastName',
			age: 'Age',
			gender: 'male (he/him)',
			height: "6'0 / 183cm",
			occupation: 'Job',
			themeURL: 'safe',
			themeName: 'content',
		},
		textBlock: {
			title: 'Title goes here',
			fontAwesomeIcon: 'cat',
			text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum...",
		},
		moodboard: {
			grayscale: true,
			image1: '/img/placeholder.png',
			image2: '/img/placeholder.png',
			image3: '/img/placeholder.png',
			image4: '/img/placeholder.png',
		},
	},
	typings: {
		accentColor: 'color',
		textBlock: { text: 'long' },
		banner: { accentColorCopy: 'check' },
		moodboard: { grayscale: 'check' },
	},
	html: `<!--------------------------------
    
  | code by togo / eithorne
  contact either account if you have questions!
  
  | ${Globals.watermark}
  | feel free to move/style the credit. just keep it visible and easy to find.
  
  
  | bootstrap colours + custom accent colour
  
  find and replace the hex below to change accent colour:
  
  {{ accentColor }}
  
  
  | layout works both on mobile and desktop :)
  
  | additional comments are added below other customizable elements.
  
--------------------------------->

<div class="container-fluid">
<div class="row justify-content-center">
<div class="col-md-8">
<div class="card rounded-0 border-0 p-2">

<!--------------------------------

         HEADER IMAGE

-------------------------------->

<div style="
display: flex;
justify-content: center;
align-items: center;
height: 200px;
background-color: {{ accentColor }};

    background-image: url({{ banner.image }});
    /* | Add URL for header image */;

background-size: cover;
background-position: center;

    {{ banner.accentColorCopy ? "background-blend-mode: luminosity;" : "" }}
    /* | Remove this if you don't want the image to blend with your accent colour */;

border-radius: 20px 20px 0 0;
">
</div>
<div class="card mt-2 p-3" style="
border-radius: 0 0 20px 20px;
">
<div class="row no-gutters">

<!--------------------------------

           SIDEBAR

-------------------------------->

<div class="col-md-auto order-md-2 text-center">

    <img src="{{ sidebar.image }}" 

class="rounded-circle" style="
width: 150px;
">
<div class="card border-0 mt-3 text-md-left text-muted" style="
font-size: 1.2em;
font-family: monospace;
">
<div>

    {{ sidebar.name }}

<hr class="w-100 my-1">

    {{ sidebar.age }}

<hr class="w-100 my-1">

    {{ sidebar.gender }}

<hr class="w-100 my-1">

    {{ sidebar.height }}

<hr class="w-100 my-1">

    {{ sidebar.occupation }}

<hr class="w-100 my-1">

    <a href="{{ sidebar.themeURL }}" style="color: {{ accentColor }}">{{ sidebar.themeName }}</a>

<hr class="w-100 my-1">
</div>
</div>
</div>

<!--------------------------------

         DESCRIPTION

-------------------------------->

<div class="col-md">
<p class="mt-2" style="
padding-bottom: 5px;
font-size: 24px;
font-family: monospace;
text-transform: uppercase;
color: {{ accentColor }};
border-bottom: 2px solid {{ accentColor }};
">

    // {{ textBlock.title }}

    <i class="fad fa-{{ textBlock.fontAwesomeIcon }} pull-right mt-1 mr-1"></i>
    

</p>
<p class="text-muted" style="
font-weight: 300;
letter-spacing: 1px;
">
    
    {{ textBlock.text }}
</p>

<!--------------------------------

          MOODBOARD

-------------------------------->

<div class="row no-gutters mt-2" style="

    {{ moodboard.grayscale ? "filter: grayscale(100%);" : "" }}
    /* | Remove this if you don't want greyscale images */;

">
<div class="col-md-3 col-6 p-1">
<div class="rounded bg-faded" style="

    background-image: url({{ moodboard.image1 }});

width: 100%;
padding-bottom: 100%;
background-size: cover;
background-position: center;">
</div>
</div>
<div class="col-md-3 col-6 p-1">
<div class="rounded bg-faded" style="

    background-image: url({{ moodboard.image2 }});

width: 100%;
padding-bottom: 100%;
background-size: cover;
background-position: center;">
</div>
</div>
<div class="col-md-3 col-6 p-1">
<div class="rounded bg-faded" style="

    background-image: url({{ moodboard.image3 }});

width: 100%;
padding-bottom: 100%;
background-size: cover;
background-position: center;">
</div>
</div>
<div class="col-md-3 col-6 p-1">
<div class="rounded bg-faded" style="

    background-image: url({{ moodboard.image4 }});

width: 100%;
padding-bottom: 100%;
background-size: cover;
background-position: center;">
</div>
</div>
</div>
</div>
<div class="col-auto d-none d-md-flex">
<div class="card h-100 border-left-0 mx-3"></div>
</div>
</div>
</div>
</div>
<a class="pull-right px-2" style="color: {{ accentColor }};" href="https://toyhou.se/togo"><i class="fal fa-code"></i></a>
<!-- | credz. feel free to style/move but don't delete, cheers -->
<!-- | ${Globals.watermark} -->
</div>
</div>
</div>`,
});

themeData.push({
	name: 'Misaligned Bootstrap',
	userCode: 'Eggy',
	themeLink: 'https://toyhou.se/9214327.-freebie-misaligned',
	declaredData: {
		title: {
			text: 'Title here',
			fontAwesomeIconName: 'crown',
		},
		text: {
			about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit. Integer interdum urna ac dui sollicitudin sollicitudin. In feugiat posuere nulla, eget lobortis ante. Aliquam magna libero, dictum sit amet scelerisque ac, scelerisque tincidunt magna. Nulla et consectetur diam. Aliquam ipsum mi, tristique sed vestibulum ac, aliquet eget magna. Mauris varius id magna vitae ullamcorper. In gravida libero consectetur, lobortis nisl sit amet, pellentesque ligula. Suspendisse tincidunt feugiat posuere. Duis dui erat, accumsan a aliquam eu, efficitur a tortor. Nunc molestie, leo in commodo aliquam, tellus augue tempor velit, non placerat ex sem non nisi.',
			trivia: [
				{
					value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					value: 'Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit.',
				},
			],
		},
		profile: {
			name: 'Name',
			age: 'much too old',
			gender: 'he/him',
			height: 'tall',
			race: 'or species',
			role: 'Role',
			demeanor: 'or something',
			themeUrl: 'https://toyhou.se/',
		},
		images: {
			profile: '/img/placeholder.png',
			fullbody: '/img/placeholder-solid.png',
		},
		quote: 'Write a quote or tagline here ',
	},
	typings: {
		text: { about: 'long' },
	},
	html: `<div class="container-fluid bg-faded p-3 my-5" style="border-radius: 1em; max-width: 1140px; box-shadow: 0 0 1em rgba(0,0,0,.2);">
  <!-- ${Globals.watermark} -->
  <div class="row no-gutters">
    <div class="col-lg-3 push-lg-9 mb-3">
      <div class="card border-0 h-100 pt-3 px-md-2 px-3 pb-md-0 pb-2" style="border-radius: 1em; font-size: 10.5pt;">
            <!----------- avatar -- use a 200 x 200 image -------------------------->
            <img src="{{ images.profile }}"
            class="d-block bg-faded p-2 mx-auto mb-3 rounded-circle" style="max-height:210px;">
            
            <!-------- stats --------------------------------------->
            <div class="row no-gutters">
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Name <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.name }}</div>
  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Age <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.age }}</div>
  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Gender <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.gender }}</div>
                  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Height <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                {{ profile.height }}</div>
  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Race <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                {{ profile.race }}</div>
  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Role <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                {{ profile.role }}</div>
                  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Demeanor <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                {{ profile.demeanor }}</div>
  
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  Theme <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  <!-- link a song here -->
                  <a href="{{ profile.themeUrl }}" target="_BLANK"><i class="fas fa-music-alt fa-fw"></i><i class="fas fa-music fa-fw"></i><i class="fas fa-music-alt fa-fw"></i></a></div>
                  <!-- credit -- pls leave this -------->
                <div class="col-6 text-right text-uppercase text-muted pr-1" style="letter-spacing: 1px;">
                  HTML <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  @eggy</div>
                  
            </div>
          </div>
    </div>
    <div class="col-lg-9 pull-lg-3 pr-md-3 mb-3">
      <div class="row no-gutters">
        <div class="col-12 mb-3">
          <div class="card border-0 p-3" style="border-radius: 1em;"><h1 class="display-4 text-primary mb-0">
            <!-- title block -- you can change the icon -- uses font awesome icons -->
            <i class="fal fa-{{ title.fontAwesomeIconName }} fa-fw"></i> {{ title.text }}</h1></div>
        </div>
        
        <div class="col-md-5 mb-md-0 mb-3">
          <div class="card border-0 h-100 modal-open" style="border-radius: 1em;">
        <!------ FOCAL IMAGE --- will scale & crop with screen -- focus in top & center of image ----------->
          <div style="background-image: url({{ images.fullbody }}); 
          background-size: cover; background-position: top center; min-height: 400px;" class="h-100"></div>
      </div>
        </div>
        <div class="col-md-7 pl-md-3">
          <!--- about block -- will scroll when filled --->
          <div class="card border-0 pt-3 px-3 pb-1" style="border-radius: 1em; font-size: 10pt; height: 450px; overflow:auto;">
              <h4 class="text-uppercase text-muted" style="letter-spacing:1px; font-weight: 300;"><i class="fal fa-bookmark mr-1"></i>About</h4>
              {{ text.about.split('\\n').map(t => \`<p class="mb-2">\${t}</p>\`).join('\\n') }}
              <h4 class="text-uppercase text-muted" style="letter-spacing:1px; font-weight: 300;"><i class="fal fa-bookmark mr-1"></i>Trivia</h4>
              <ul>
                {{ text.trivia.map(i => \`<li class="mb-2">\${i.value}</li>\`).join('\\n') }}
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="card border-0 p-3" style="border-radius: 1em;"><p class="text-primary text-center" style="letter-spacing: 1px;">
    <i class="fal fa-quote-left fa-fw mr-1 pull-left"></i><span>
    <!-- quote line here --------->
    {{ quote }}
    </span><i class="fal fa-quote-right fa-fw ml-1 pull-right"></i></p></div>
  <!-- ${Globals.watermark} -->
  </div>`,
});

themeData.push({
	name: 'Misaligned Custom',
	userCode: 'Eggy',
	themeLink: 'https://toyhou.se/9214327.-freebie-misaligned',
	declaredData: {
		title: {
			text: 'Title here',
			fontAwesomeIconName: 'crown',
		},
		colors: {
			focal: '#a09fba',
			content: '#444',
			background: '#222',
			font: '#fff',
		},
		text: {
			about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit. Integer interdum urna ac dui sollicitudin sollicitudin. In feugiat posuere nulla, eget lobortis ante. Aliquam magna libero, dictum sit amet scelerisque ac, scelerisque tincidunt magna. Nulla et consectetur diam. Aliquam ipsum mi, tristique sed vestibulum ac, aliquet eget magna. Mauris varius id magna vitae ullamcorper. In gravida libero consectetur, lobortis nisl sit amet, pellentesque ligula. Suspendisse tincidunt feugiat posuere. Duis dui erat, accumsan a aliquam eu, efficitur a tortor. Nunc molestie, leo in commodo aliquam, tellus augue tempor velit, non placerat ex sem non nisi.',
			trivia: [
				{
					value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				},
				{
					value: 'Suspendisse sit amet massa blandit, fermentum enim a, scelerisque velit.',
				},
			],
		},
		profile: {
			name: 'Name',
			age: 'much too old',
			gender: 'he/him',
			height: 'tall',
			race: 'or species',
			role: 'Role',
			demeanor: 'or something',
			themeUrl: 'https://toyhou.se/',
		},
		images: {
			profile: '/img/placeholder.png',
			fullbody: '/img/placeholder-solid.png',
		},
		quote: 'Write a quote or tagline here ',
	},
	typings: {
		text: {
			about: 'long',
		},
		colors: {
			focal: 'color',
			content: 'color',
			background: 'color',
			font: 'color',
		},
	},
	html: `<!-- use find & replace to quick replace hex codes 
  ---- default focal color is: {{ colors.focal }}
  ---- default content box color is: {{ colors.content }}
  ---- default bg color is: {{ colors.background }} 
  ---- default font color is: {{ colors.font }}
  ---->
  <!-- ${Globals.watermark} -->
  <!-- main container -- set bg color & font color here -->
  <div style="border-radius: 1em; max-width: 1140px; box-shadow: 0 0 1em rgba(0,0,0,.25); color: {{ colors.font }}; background: {{ colors.background }};" 
  class="container-fluid p-3 my-5" >
  <div class="row no-gutters">
    <div class="col-lg-3 push-lg-9 mb-3">
      <div style="border-radius: 1em; font-size: 10.5pt; background: {{ colors.content }};"
       class="card border-0 h-100 pt-3 px-md-2 px-3 pb-md-0 pb-2" >
            <!----------- avatar -- use a 200 x 200 image -------------------------->
            <img src="{{ images.profile }}"
            class="d-block p-2 mx-auto mb-3 rounded-circle" style="max-height:210px; background: {{ colors.focal }};">
            
            <!-------- stats --------------------------------------->
            <div class="row no-gutters">
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Name <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.name }}</div>
  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Age <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.age }}</div>
  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Gender <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.gender }}</div>
                  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Height <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.height }}</div>
  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Race <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.race }}</div>
  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Role <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.role }}</div>
                  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Demeanor <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  {{ profile.demeanor }}</div>
  
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  Theme <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  <!-- link a song here -->
                  <a href="{{ profile.themeUrl }}" target="_BLANK" style="color: {{ colors.focal }};">
                    <i class="fas fa-music-alt fa-fw"></i><i class="fas fa-music fa-fw"></i><i class="fas fa-music-alt fa-fw"></i></a></div>
                  <!-- credit -- pls leave this -------->
                <div class="col-6 text-right text-uppercase pr-1" style="opacity: 0.7; letter-spacing: 1px;">
                  HTML <i class="fal fa-angle-double-right fa-fw"></i></div>
                <div class="col-6 mb-2">
                  <a href="/eggy" target="_BLANK" style="color: {{ colors.focal }};">Eggy</a></div>
                  
            </div>
          </div>
    </div>
    <div class="col-lg-9 pull-lg-3 pr-md-3 mb-3">
      <div class="row no-gutters">
        <div class="col-12 mb-3">
          <div style="background: {{ colors.focal }}; border-radius: 1em;" class="card border-0 p-3" ><h1 class="display-4 text-white mb-0">
            <!-- title block -- you can change the icon -- uses font awesome icons -->
            <i class="fal fa-{{ title.fontAwesomeIconName}} fa-fw"></i> {{ title.text }}</h1></div>
        </div>
        
        <div class="col-md-5 mb-md-0 mb-3">
          <div class="border-0 h-100 modal-open" style="border-radius: 1em; background: {{ colors.content }};">
        <!------ FOCAL IMAGE --- will scale & crop with screen -- focus in top & center of image ----------->
          <div style="background-image: url({{ images.fullbody}}); 
          background-size: cover; background-position: top center; min-height: 400px;" class="h-100"></div>
      </div>
        </div>
        <div class="col-md-7 pl-md-3">
          <!--- about block -- will scroll when filled --->
          <div class="pt-3 px-3 pb-1" style="border-radius: 1em; font-size: 10pt; height: 450px; overflow:auto; background: {{ colors.content }};">
              <h4 class="text-uppercase" style="letter-spacing:1px; font-weight: 300; opacity: 0.7;">
                <i class="fal fa-bookmark mr-1"></i>About
              </h4>
                {{ text.about.split('\\n').map(t => \`<p class="mb-2">\${t}</p>\`).join('\\n') }}
              <h4 class="text-uppercase" style="letter-spacing:1px; font-weight: 300; opacity: 0.7;">
                <i class="fal fa-bookmark mr-1"></i>Trivia
              </h4>
              <ul>
                {{ text.trivia.map(i => \`<li class="mb-2">\${i.value}</li>\`).join('\\n') }}
              </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="p-3" style="border-radius: 1em; background: {{ colors.focal }};"><p class="text-white text-center" style="letter-spacing: 1px;">
    <i class="fal fa-quote-left fa-fw mr-1 pull-left"></i><span>
    <!-- quote line here --------->
    {{ quote }}
    </span><i class="fal fa-quote-right fa-fw ml-1 pull-right"></i></p></div>
  <!-- ${Globals.watermark} -->
  </div>`,
});

themeData.push({
	name: 'Undefined',
	userCode: 'Safe',
	declaredData: {
		profile: {
			name: 'Safe',
			subheader: 'he/her : goo ging gong : write something',
			bio: 'Write something inspiring about yourself, I think people will really like to hear about you.\nThe more you write in here, the longer the box will get. So keep that in mind.',
			bioCenteredText: false,
		},
		leftText: {
			table: [
				{
					value: 'Commissions',
					link: true,
					url: 'https://toyhou.se/',
					status: 'Open',
				},
				{
					value: 'Trades',
					link: false,
					url: 'https://toyhou.se/',
					status: 'Closed',
				},
			],
			sideNote: 'rlly tiny note if u want...',
		},
		socials: [
			{ value: 'instagram', url: 'https://toyhou.se' },
			{ value: 'tumblr', url: 'https://toyhou.se' },
			{ value: 'twitter', url: 'https://toyhou.se' },
			{ value: 'deviantart', url: 'https://toyhou.se' },
			{ value: 'spotify', url: 'https://toyhou.se' },
		],
		layout: { reverse: false, column: false, outside: { border: true, rounded: true } },
		spacing: { height: '15', width: '30', betweenLinks: '0.45' },
	},
	typings: {
		profile: { bio: 'long', bioCenteredText: 'check' },
		layout: {
			reverse: 'check',
			column: 'check',
			outside: { border: 'check', rounded: 'check' },
		},
    leftText: {
      table: [{
        link: 'check',
      }]
    }
	},
	themeLink: '',
	html: `
<div class="mx-auto container">
<!---------------------

  Template Generated & Created by @Safe (https://toyhou.se/Safe)

  Please:
    - Do not remove the attribution
    - Feel free to poke around or learn from it, I do the same
    - Hit me up if you need a code for yourself :)

---------------------->
  <div class="mx-auto" style="{{ layout.outside.border ? 'border-style: solid;border-width: 1px;border-color: lightgray;' : '' }}{{ layout.outside.rounded ? 'border-radius: 0.5rem;' : '' }}user-select: none;padding: 1.5rem;max-width: {{ spacing.width }}rem;min-width: 17rem;min-height: {{ spacing.height }}rem; display: flex; flex-direction: column;">
    <h1 class="mx-auto" style="max-width: 20rem;letter-spacing: 0.025em;line-height: 1.5;font-weight: 500;font-size: 1.5rem;text-align: center;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{ profile.name }}</h1>
    <p class="text-muted font-italic text-monospace" style="font-size: 0.75rem;text-align: center;">{{ profile.subheader }}</p>
    <div style="margin-top: 1.5rem;margin-bottom: 1.5rem;flex-grow: 1;display:flex;flex-direction: {{ layout.column ? 'column' : 'row' }}{{ layout.reverse ? '-reverse' : '' }};">
      <div class="{{ layout.column ? '' : 'w-50' }}" style="padding-{{ layout.column ? (!layout.reverse ? 'bottom' : 'top') : (!layout.reverse ? 'right' : 'left')}}: 1.5rem;">
        <div class="w-100 text-monospace" style="font-size: 0.75rem;line-height: 0.4rem;{{ layout.column ? '' : 'padding-top: 0.6rem;' }}">
          {{ _.join(_.map(leftText.table, (entry) => \`\t<p class="w-100" style="display: flex;align-items: center;justify-content: space-between;"><span>\${ entry.value }</span><span class="mx-2" style="border-style:solid;border-width: 0px;border-top-width: 1px;border-color: lightgray;flex-grow: 1;height: 0;"></span>\${ entry.link ? \`<a class="text-secondary" style="text-decoration: underline;" href="\${ entry.url }">\${ entry.status }</a>\` : \`<span>\${ entry.status }</span>\` }</p>\`), '\\n') }}
        </div>
        <div class="text-center font-italic" style="font-size: 0.75rem;margin-top: 1rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
          {{ leftText.sideNote }}
        </div>
      </div>
      <div class="{{ layout.column ? '' : 'w-50' }}" style="{{ layout.outside.border ? 'border-style: solid;border-width: 0px;border-color: lightgray;' : '' }}{{ layout.column ? \`border-\${ layout.reverse ? 'bottom' : 'top' }\` : \`border-\${ layout.reverse ? 'right' : 'left' }\` }}-width: 1px;text-align: {{ profile.bioCenteredText ? 'center' : 'left' }};padding-{{ layout.column ? (layout.reverse ? 'bottom' : 'top') : (layout.reverse ? 'right' : 'left')}}: 1.5rem;">
        {{ _.join(_.map(profile.bio.split('\\n'), (text) => \`\t<p>\${ text }</p>\`), '\\n') }}
      </div>
    </div>
    <div class="mx-auto" style="display: flex;flex-direction: row;align-items: center;column-gap: {{ spacing.betweenLinks }}rem;">
      {{ _.join(_.map(socials, (i) => \`\t<a href="\${ i.url.toLowerCase() }" class="text-secondary"><i class="fab fa-\${ i.value }"></i></a>\`), '\\n') }}
    </div>
    
  </div>
  <div class="mx-auto" style="user-select: none;max-width: {{ spacing.width }}rem;min-width: 17rem;">
    <a class="pull-right px-2 text-muted"href="https://toyhou.se/safe"><i class="fad fa-sparkles"></i></a>
  </div>
</div>`,
});
