/* ==========================================================================
   DATA FILE — edit this to add topics and resources.
   This is the ONLY file you need to touch. index.html reads this
   automatically and renders the graph.

   HOW IT WORKS
   ------------
   GRAPH_DATA.branches is a list of topic nodes. Each one looks like:

   {
     id: "unique-short-id",          // no spaces, must be unique
     label: "Name shown on the node",
     eyebrow: "Small label shown above the title in the side panel",
     description: "1-3 sentences shown at the top of the side panel.",
     resources: [
       {
         type: "Articles",           // becomes a section header
         items: [
           { title: "Title of the piece", url: "https://...", meta: "Author, Year" },
           { title: "Another piece",      url: "https://...", meta: "Author, Year" }
         ]
       },
       {
         type: "Books",
         items: [
           { title: "Book title", url: "https://...", meta: "Author, Year" }
         ]
       }
     ]
   }

   - You can use any "type" labels you like: "Articles", "Books", "Videos",
     "Organizations", "Podcasts" — whatever fits.
   - Leave "resources: []" (empty) for a branch and it will show a friendly
     "nothing here yet" message instead of breaking.
   - The node's size on the graph grows automatically with how many
     resources it has.
   - To add a whole new branch, copy one of the blocks below, paste it
     as a new item in the array, and give it a unique "id".
   ========================================================================== */

const GRAPH_DATA = {
  title: "Feminist Theory",

  branches: [
    {
      id: "first-wave",
      label: "First-Wave Feminism",
      eyebrow: "Historical wave",
      description: "Late 19th–early 20th century organizing centered on legal and political rights, most visibly suffrage.",
      resources: []
    },
    {
      id: "second-wave",
      label: "Second-Wave Feminism",
      eyebrow: "Historical wave",
      description: "Mid-20th century feminism addressing sexuality, family, the workplace, and reproductive rights, alongside sharp internal debates.",
      resources: [The Second Sex by Simone de Beauvoir]
    },
    {
      id: "third-wave",
      label: "Third-Wave Feminism",
      eyebrow: "Historical wave",
      description: "1990s–2000s feminism responding to second-wave critiques, engaging individuality, sex-positivity, and popular culture.",
      resources: []
    },
    {
      id: "fourth-wave",
      label: "Fourth-Wave Feminism",
      eyebrow: "Historical wave",
      description: "Digitally organized, contemporary feminism — #MeToo, online activism, and renewed attention to structural and institutional harm.",
      resources: []
    },
    {
      id: "intersectionality",
      label: "Intersectionality",
      eyebrow: "Framework",
      description: "The study of how race, class, gender, sexuality, and other axes of identity combine to produce distinct, compounded experiences of power and oppression.",
      resources: [
        {
          type: "Articles",
          items: [
            { title: "Demarginalizing the Intersection of Race and Sex", url: "https://chicagounbound.uchicago.edu/uclf/vol1989/iss1/8/", meta: "Kimberlé Crenshaw, 1989 — coined the term 'intersectionality'" },
            { title: "Mapping the Margins: Intersectionality, Identity Politics, and Violence Against Women of Color", url: "https://www.jstor.org/stable/1229039", meta: "Kimberlé Crenshaw, Stanford Law Review, 1991" }
          ]
        },
        {
          type: "Books",
          items: [
            { title: "Intersectionality: A Foundational Concept for Feminist Theory", url: "https://www.google.com/search?q=%22Intersectionality%3A+Key+Concepts%22+Collins+Bilge", meta: "Patricia Hill Collins & Sirma Bilge, 2016" }
          ]
        }
      ]
    },
    {
      id: "black-feminism",
      label: "Black Feminist Thought",
      eyebrow: "Tradition",
      description: "A body of theory centering Black women's experience, from the Combahee River Collective to contemporary scholarship on race and gender.",
      resources: [
        {
          type: "Articles",
          items: [
            { title: "The Combahee River Collective Statement", url: "https://www.blackpast.org/african-american-history/combahee-river-collective-statement-1977/", meta: "Combahee River Collective, 1977" }
          ]
        },
        {
          type: "Books",
          items: [
            { title: "Black Feminist Thought: Knowledge, Consciousness, and the Politics of Empowerment", url: "https://www.google.com/search?q=Black+Feminist+Thought+Patricia+Hill+Collins", meta: "Patricia Hill Collins, 1990" },
            { title: "Ain't I a Woman: Black Women and Feminism", url: "https://www.google.com/search?q=Ain%27t+I+a+Woman+bell+hooks", meta: "bell hooks, 1981" }
          ]
        }
      ]
    },
    {
      id: "postcolonial-decolonial",
      label: "Postcolonial & Decolonial Feminism",
      eyebrow: "Tradition",
      description: "Critiques of Western feminist universalism, centering colonial history, Global South knowledge production, and epistemic justice.",
      resources: [
        {
          type: "Articles",
          items: [
            { title: "Can the Subaltern Speak?", url: "https://monoskop.org/images/4/45/Spivak_Gayatri_1988_Can_the_Subaltern_Speak.pdf", meta: "Gayatri Chakravorty Spivak, 1988" },
            { title: "Under Western Eyes: Feminist Scholarship and Colonial Discourses", url: "https://www.jstor.org/stable/633194", meta: "Chandra Talpade Mohanty, 1988" }
          ]
        }
      ]
    },
    {
      id: "radical-feminism",
      label: "Radical Feminism",
      eyebrow: "Tradition",
      description: "A tradition locating patriarchy as a root structural system, with historical focus on male violence, sexuality, and reproduction.",
      resources: []
    },
    {
      id: "liberal-feminism",
      label: "Liberal Feminism",
      eyebrow: "Tradition",
      description: "Feminism oriented around legal equality, representation, and reform within existing political and economic institutions.",
      resources: []
    },
    {
      id: "marxist-socialist",
      label: "Marxist & Socialist Feminism",
      eyebrow: "Tradition",
      description: "Feminism analyzing gender oppression through class, labor, and capitalism, including debates on social reproduction and domestic work.",
      resources: []
    },
    {
      id: "queer-theory",
      label: "Queer Theory",
      eyebrow: "Framework",
      description: "Theory challenging fixed categories of gender and sexuality, with roots in feminist and LGBTQ+ scholarship.",
      resources: []
    },
    {
      id: "trans-feminism",
      label: "Trans Feminism",
      eyebrow: "Tradition",
      description: "Feminist theory and organizing centering trans experience, gender self-determination, and critiques of medical and legal gatekeeping.",
      resources: []
    },
    {
      id: "eco-feminism",
      label: "Eco-Feminism",
      eyebrow: "Framework",
      description: "Theory linking the domination of women and the domination of nature, and organizing at the intersection of gender and environmental justice.",
      resources: []
    },
    {
      id: "feminist-economics",
      label: "Feminist Economics",
      eyebrow: "Framework",
      description: "Analysis of unpaid care work, labor markets, and economic policy through a gender lens, including critiques of GDP and mainstream economic modeling.",
      resources: [
        {
          type: "Books",
          items: [
            { title: "If Women Counted: A New Feminist Economics", url: "https://www.marilynwaring.com/publications/if-women-counted.asp", meta: "Marilyn Waring, 1988 — founding text of feminist economics" }
          ]
        },
        {
          type: "Organizations",
          items: [
            { title: "International Association for Feminist Economics (IAFFE)", url: "https://www.iaffe.org/", meta: "Professional association and journal (Feminist Economics)" }
          ]
        },
        {
          type: "Videos",
          items: [
            { title: "Whose Counting? (documentary on Marilyn Waring)", url: "https://www.nfb.ca/film/whos_counting_marilyn_waring_on_sex_lies_and_global_economics/", meta: "Directed by Terre Nash, 1995, National Film Board of Canada" }
          ]
        }
      ]
    },
    {
      id: "standpoint-theory",
      label: "Standpoint Theory",
      eyebrow: "Framework",
      description: "The claim that knowledge is situated, and that marginalized social positions can offer distinct epistemic insight.",
      resources: []
    },
    {
      id: "language-gender",
      label: "Language & Gender",
      eyebrow: "Framework",
      description: "Study of how language encodes, reproduces, and can be reshaped to challenge gendered power relations.",
      resources: []
    },
    {
      id: "gender-based-violence",
      label: "Gender-Based Violence",
      eyebrow: "Applied focus",
      description: "Theory and research on intimate partner violence, femicide, structural violence, and policy responses across contexts.",
      resources: [
        {
          type: "Articles",
          items: [
            { title: "La escritura en el cuerpo de las mujeres asesinadas en Ciudad Juárez", url: "https://tintalimon.com.ar/public/nb17ss278nqh7lvoki8vfoh751y0/pdf_978-987-27390-4-1.pdf", meta: "Rita Laura Segato, 2006/2013 — femigenocide and 'segundo estado' framework" }
          ]
        },
        {
          type: "Organizations",
          items: [
            { title: "UN Women — Ending Violence Against Women", url: "https://www.unwomen.org/en/what-we-do/ending-violence-against-women", meta: "Global data, frameworks, and policy resources" }
          ]
        }
      ]
    },
    {
      id: "reproductive-justice",
      label: "Reproductive Justice",
      eyebrow: "Applied focus",
      description: "A framework, distinct from a narrower 'choice' framing, centering the right to have children, not have children, and parent in safe conditions.",
      resources: []
    }
  ]
};
