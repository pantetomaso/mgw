# Marseille Good Waves

Site vitrine de **Marseille Good Waves** — sport au lever du soleil sur la plage
des Catalans (yoga, running, natation, HIIT) et team building face à la
Méditerranée.

Application **Next.js 15** (App Router, React 19, TypeScript, Tailwind CSS v4).
Migrée depuis un prototype Lovable / TanStack Start — seul le design a été conservé.

## Pages

| Route | Description |
| ----- | ----------- |
| `/`   | Sélecteur entre les deux directions de design |
| `/v1` | « Mediterranean Sunrise » — hero plein écran, sessions en cartes |
| `/v2` | « Logo Original » — hero en split, logo + typo script, sessions en liste |

## Structure

```
app/
  layout.tsx        # layout racine + <html>/<body> + metadata
  globals.css       # Tailwind v4 + thème (tokens couleurs, fonts, utilitaires)
  page.tsx          # accueil (sélecteur)
  v1/page.tsx       # design v1
  v2/page.tsx       # design v2
components/
  Logo.tsx          # logo SVG + wordmark
  ContactForm.tsx   # formulaire de contact (client component)
public/assets/      # images
scripts/            # outils Railway (API GraphQL + déploiement)
```

## Développement

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production (output: standalone)
npm run start    # sert le build de production
```

## Déploiement (Railway)

L'app est déployée sur Railway (projet « Marseille Good Waves ») via le
`Dockerfile` (build Next.js standalone).

```bash
# Statut du projet via l'API GraphQL Railway
python3 scripts/railway-deploy.py

# Déployer le working tree courant
./scripts/deploy.sh
```

Les identifiants Railway (`RAILWAY_TOKEN` = account token, `RAILWAY_PROJECT_ID`)
sont lus depuis `.env` (non versionné).
