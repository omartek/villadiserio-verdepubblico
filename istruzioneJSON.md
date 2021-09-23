# Istruzioni per la creazione del file JSON

Per la creazione del file .JSON seguire i segueti passaggi:

- eseguire il filtro e scaricare [dal link inaturalsit](https://www.inaturalist.org/observations/export?projects=verde-pubblico-urbano)

- convertire il file **.csv** in **.json** per esempio [da questo link](https://www.convertcsv.com/csv-to-json.htm) o altro metodo

- aggiungere **var data =** e backtick per il corretto parsing

- convertire **field:villads** in **field_villads**

- convertire **"field_villads": null** in **"field_villads": 100**
