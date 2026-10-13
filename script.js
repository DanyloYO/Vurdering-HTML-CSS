const seksjoner = [
    {
        tittel: "1. Første gangs oppsett",
        farge: "bla",
        kommandoer: [
            'git config --global user.name "Ola Nordmann"',
            'git config --global user.email "ola@example.com"',
            "git config --global init.defaultBranch main",
            "git config --global --list"
        ],
        tips: ["Gjøres én gang på hver PC.", "Bruk samme e-post som på GitHub."]
    },
    {
        tittel: "2. Start et prosjekt",
        farge: "bla",
        kommandoer: ["git clone <url>", "cd ukeplan", "code ."],
        tips: ["Lag repoet på GitHub først, så klon det.", "Ikke kjør git init etter git clone."]
    },
    {
        tittel: "3. Er alt riktig?",
        farge: "bla",
        kommandoer: ["git status", "git remote -v", "git branch", "git log --oneline"],
        tips: ["git status skal vise «On branch main».", "* viser hvilken branch du står på."]
    },
    {
        tittel: "4. Daglig rutine",
        farge: "gronn",
        kommandoer: ["git status", "git pull", "git diff", "git add .", 'git commit -m "Beskriv hva du gjorde"', "git push", "git status"],
        tips: ["Pull FØR du begynner å jobbe.", "To PC-er? Pull først og push før du går."]
    },
    {
        tittel: "5. Commit-meldinger",
        farge: "gronn",
        tips: ["Bra: «Lag navigasjonsmeny», «Rett feil i mobilmeny»", "Dårlig: «test», «ting», «asdf»", "Commit ofte. Små commits er bedre enn én stor."]
    },
    {
        tittel: "6. Branches og merge",
        farge: "bla",
        kommandoer: ["git switch -c login", "git push -u origin login", "git switch main", "git pull", "git merge login", "git push"],
        tips: ["Trengs ikke for enkle oppgaver.", "Ha «working tree clean» før du bytter branch."]
    },
    {
        tittel: "7. Merge conflict",
        farge: "oransje",
        kommandoer: ["git add .", 'git commit -m "Løs merge conflict"', "git push"],
        tips: ["Skjer når to endringer treffer samme linje.", "Velg i VS Code: Accept Current, Incoming eller Both.", "Ikke slett .git!"]
    },
    {
        tittel: "8. .gitignore og passord",
        farge: "oransje",
        kommandoer: ["node_modules/", ".env", "*.log"],
        tips: ["Lag .gitignore tidlig.", "Passord skal i .env, ikke i koden.", "Er et passord pushet, må det byttes."]
    },
    {
        tittel: "9. Farlige kommandoer",
        farge: "rod",
        kommandoer: ["git reset --hard", "git push --force", "rm -rf .git"],
        tips: ["Kan slette arbeid eller hele repoet."]
    },
    {
        tittel: "10. Når Git klager",
        farge: "bla",
        kommandoer: ["git status", "git remote -v", "git branch"],
        tips: ["Hvilken mappe står jeg i?", "Hvilket repo og hvilken branch?", "Les hele feilmeldingen."]
    }
];

Vue.createApp({
    data() {
        return {
            sok: "",
            seksjoner: seksjoner
        };
    },
    computed: {
        filtrert() {
            let sok = this.sok.toLowerCase();
            return this.seksjoner.filter(s => s.tittel.toLowerCase().includes(sok));
        }
    }
}).mount("#app");
