import express from "express";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import fingerprint from 'express-fingerprint'

import config from "./config.js";
import errorHandler from "./middleware/ErrorMiddleware.js";
import authRouter from './routes/AuthRouter.js'
import resumeRouter from './routes/ResumeRouter.js'
import jobRouter from './routes/JobRouter.js'
import searchRouter from './routes/SearchRouter.js'
//import './database/sync.js'

const PORT = config.server.port;

const app = express();


app.use(express.json()) // позволяет читать JSON
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(fingerprint({ parameters: [fingerprint.useragent, fingerprint.acceptHeaders] }));

app.use(searchRouter);
app.use(authRouter);
app.use(resumeRouter);
app.use(jobRouter);

app.use(errorHandler);  // обязательно в конце



app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Сервер запущен на порту: ' + PORT)
    }
});



// Type: // тип данных всех типов (примеры: Number, String, Bool)

// Any:    // базовый класс всех классов
//     Number: // базовый класс числовых классов
//         Complex // базовый класс комплексных чисел
//         Real:    // базовый класс действительных классов
//             Integer:    // базовый класс целочисленных классов
//                 Signed:     // базовый класс целочисленных знаковых классов
//                     Int8    // класс 1-байтных целых чисел со знаком (-128..127)
//                     Int16   // класс 2-байтных целых чисел со знаком (-32768..32767)
//                     Int32   // класс 3-байтных целых чисел со знаком (-2147483648..2147483647)
//                     Int64   // класс 4-байтных целых чисел со знаком (-9223372036854775808..9223372036854775807)
//                 Unsigned:   // базовый класс целочисленных беззнаковых классов
//                     Uint8   // класс 8-байтных целых чисел без знака (0..255)
//                     Uint16  // класс 2-байтных целых чисел без знака (0..65535)
//                     Uint32  // класс 3-байтных целых чисел без знака (0..4294967295)
//                     Uint64  // класс 4-байтных целых чисел без знака (0..18446744073709551615)
//             Float:      // базовый класс нецелочисленных классов
//                 Float16    // класс 2-байтных нецелых чисел (5.96e-8..3.402823e+38)
//                 Float32    // класс 3-байтных нецелых чисел (1.4e-45..3.402823e+38)
//                 Float64    // класс 4-байтных нецелых чисел (5.0e-324..1.7976931348623157e+308)
//             Ratiolnal    // базовый класс рациональных чисел 
//     Iterable: // базовый класс итерируемых классов
//         Array  // базовый класс массивов
//         Set    // базовый класс множеств
//         Range  // базовый класс диапазонов
//         Tuple  // базовый класс кортежей
//         String // класс строк
//     RegExp  // базовый класс регулярных выражений
//     Null   // класс нулевого значения
//     Bool   // класс логического значения
//     Map    // класс словаря
//     Module // класс модулей
//     Function // класс функций
