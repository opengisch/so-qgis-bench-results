/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 42705.0, "series": [{"data": [[0.0, 4.0], [0.1, 5.0], [0.2, 11.0], [0.3, 13.0], [0.4, 13.0], [0.5, 13.0], [0.6, 14.0], [0.7, 15.0], [0.8, 15.0], [0.9, 19.0], [1.0, 20.0], [1.1, 21.0], [1.2, 22.0], [1.3, 24.0], [1.4, 26.0], [1.5, 27.0], [1.6, 28.0], [1.7, 29.0], [1.8, 30.0], [1.9, 31.0], [2.0, 33.0], [2.1, 34.0], [2.2, 37.0], [2.3, 38.0], [2.4, 41.0], [2.5, 47.0], [2.6, 51.0], [2.7, 56.0], [2.8, 58.0], [2.9, 63.0], [3.0, 65.0], [3.1, 69.0], [3.2, 79.0], [3.3, 81.0], [3.4, 85.0], [3.5, 86.0], [3.6, 89.0], [3.7, 97.0], [3.8, 101.0], [3.9, 111.0], [4.0, 115.0], [4.1, 117.0], [4.2, 120.0], [4.3, 121.0], [4.4, 123.0], [4.5, 124.0], [4.6, 125.0], [4.7, 126.0], [4.8, 127.0], [4.9, 128.0], [5.0, 129.0], [5.1, 130.0], [5.2, 132.0], [5.3, 133.0], [5.4, 133.0], [5.5, 134.0], [5.6, 136.0], [5.7, 136.0], [5.8, 137.0], [5.9, 138.0], [6.0, 139.0], [6.1, 139.0], [6.2, 140.0], [6.3, 141.0], [6.4, 141.0], [6.5, 142.0], [6.6, 142.0], [6.7, 143.0], [6.8, 144.0], [6.9, 144.0], [7.0, 145.0], [7.1, 146.0], [7.2, 147.0], [7.3, 147.0], [7.4, 148.0], [7.5, 149.0], [7.6, 149.0], [7.7, 150.0], [7.8, 150.0], [7.9, 151.0], [8.0, 152.0], [8.1, 152.0], [8.2, 153.0], [8.3, 154.0], [8.4, 154.0], [8.5, 154.0], [8.6, 155.0], [8.7, 155.0], [8.8, 156.0], [8.9, 156.0], [9.0, 157.0], [9.1, 157.0], [9.2, 157.0], [9.3, 158.0], [9.4, 158.0], [9.5, 159.0], [9.6, 159.0], [9.7, 160.0], [9.8, 160.0], [9.9, 160.0], [10.0, 161.0], [10.1, 161.0], [10.2, 162.0], [10.3, 163.0], [10.4, 163.0], [10.5, 164.0], [10.6, 164.0], [10.7, 165.0], [10.8, 166.0], [10.9, 166.0], [11.0, 167.0], [11.1, 168.0], [11.2, 168.0], [11.3, 169.0], [11.4, 169.0], [11.5, 169.0], [11.6, 170.0], [11.7, 170.0], [11.8, 171.0], [11.9, 171.0], [12.0, 171.0], [12.1, 172.0], [12.2, 172.0], [12.3, 173.0], [12.4, 173.0], [12.5, 173.0], [12.6, 174.0], [12.7, 174.0], [12.8, 174.0], [12.9, 175.0], [13.0, 175.0], [13.1, 176.0], [13.2, 177.0], [13.3, 177.0], [13.4, 177.0], [13.5, 178.0], [13.6, 178.0], [13.7, 178.0], [13.8, 179.0], [13.9, 179.0], [14.0, 180.0], [14.1, 180.0], [14.2, 181.0], [14.3, 181.0], [14.4, 182.0], [14.5, 182.0], [14.6, 183.0], [14.7, 183.0], [14.8, 184.0], [14.9, 184.0], [15.0, 185.0], [15.1, 185.0], [15.2, 186.0], [15.3, 186.0], [15.4, 187.0], [15.5, 187.0], [15.6, 187.0], [15.7, 188.0], [15.8, 188.0], [15.9, 189.0], [16.0, 189.0], [16.1, 190.0], [16.2, 190.0], [16.3, 191.0], [16.4, 191.0], [16.5, 191.0], [16.6, 192.0], [16.7, 192.0], [16.8, 193.0], [16.9, 193.0], [17.0, 194.0], [17.1, 195.0], [17.2, 196.0], [17.3, 196.0], [17.4, 196.0], [17.5, 197.0], [17.6, 197.0], [17.7, 197.0], [17.8, 198.0], [17.9, 199.0], [18.0, 199.0], [18.1, 199.0], [18.2, 200.0], [18.3, 201.0], [18.4, 202.0], [18.5, 202.0], [18.6, 202.0], [18.7, 203.0], [18.8, 203.0], [18.9, 204.0], [19.0, 204.0], [19.1, 205.0], [19.2, 206.0], [19.3, 207.0], [19.4, 208.0], [19.5, 208.0], [19.6, 208.0], [19.7, 209.0], [19.8, 209.0], [19.9, 209.0], [20.0, 210.0], [20.1, 210.0], [20.2, 211.0], [20.3, 211.0], [20.4, 211.0], [20.5, 212.0], [20.6, 212.0], [20.7, 212.0], [20.8, 213.0], [20.9, 213.0], [21.0, 214.0], [21.1, 214.0], [21.2, 215.0], [21.3, 215.0], [21.4, 216.0], [21.5, 216.0], [21.6, 217.0], [21.7, 217.0], [21.8, 218.0], [21.9, 218.0], [22.0, 219.0], [22.1, 219.0], [22.2, 219.0], [22.3, 220.0], [22.4, 220.0], [22.5, 220.0], [22.6, 221.0], [22.7, 222.0], [22.8, 222.0], [22.9, 222.0], [23.0, 222.0], [23.1, 223.0], [23.2, 223.0], [23.3, 224.0], [23.4, 224.0], [23.5, 225.0], [23.6, 225.0], [23.7, 226.0], [23.8, 226.0], [23.9, 226.0], [24.0, 226.0], [24.1, 227.0], [24.2, 227.0], [24.3, 228.0], [24.4, 228.0], [24.5, 228.0], [24.6, 229.0], [24.7, 230.0], [24.8, 230.0], [24.9, 230.0], [25.0, 231.0], [25.1, 232.0], [25.2, 232.0], [25.3, 233.0], [25.4, 233.0], [25.5, 234.0], [25.6, 234.0], [25.7, 234.0], [25.8, 235.0], [25.9, 235.0], [26.0, 235.0], [26.1, 236.0], [26.2, 236.0], [26.3, 236.0], [26.4, 237.0], [26.5, 237.0], [26.6, 238.0], [26.7, 239.0], [26.8, 239.0], [26.9, 240.0], [27.0, 241.0], [27.1, 241.0], [27.2, 242.0], [27.3, 243.0], [27.4, 243.0], [27.5, 244.0], [27.6, 245.0], [27.7, 245.0], [27.8, 246.0], [27.9, 246.0], [28.0, 246.0], [28.1, 246.0], [28.2, 247.0], [28.3, 247.0], [28.4, 247.0], [28.5, 247.0], [28.6, 248.0], [28.7, 248.0], [28.8, 249.0], [28.9, 250.0], [29.0, 250.0], [29.1, 250.0], [29.2, 250.0], [29.3, 251.0], [29.4, 251.0], [29.5, 252.0], [29.6, 252.0], [29.7, 253.0], [29.8, 253.0], [29.9, 254.0], [30.0, 254.0], [30.1, 254.0], [30.2, 255.0], [30.3, 255.0], [30.4, 256.0], [30.5, 256.0], [30.6, 257.0], [30.7, 257.0], [30.8, 258.0], [30.9, 258.0], [31.0, 259.0], [31.1, 259.0], [31.2, 260.0], [31.3, 260.0], [31.4, 260.0], [31.5, 261.0], [31.6, 261.0], [31.7, 261.0], [31.8, 262.0], [31.9, 262.0], [32.0, 262.0], [32.1, 263.0], [32.2, 264.0], [32.3, 264.0], [32.4, 264.0], [32.5, 265.0], [32.6, 265.0], [32.7, 265.0], [32.8, 266.0], [32.9, 266.0], [33.0, 266.0], [33.1, 267.0], [33.2, 267.0], [33.3, 268.0], [33.4, 268.0], [33.5, 268.0], [33.6, 269.0], [33.7, 269.0], [33.8, 269.0], [33.9, 269.0], [34.0, 270.0], [34.1, 270.0], [34.2, 271.0], [34.3, 271.0], [34.4, 271.0], [34.5, 271.0], [34.6, 272.0], [34.7, 272.0], [34.8, 272.0], [34.9, 272.0], [35.0, 273.0], [35.1, 273.0], [35.2, 273.0], [35.3, 274.0], [35.4, 274.0], [35.5, 274.0], [35.6, 274.0], [35.7, 275.0], [35.8, 275.0], [35.9, 276.0], [36.0, 276.0], [36.1, 277.0], [36.2, 277.0], [36.3, 277.0], [36.4, 278.0], [36.5, 278.0], [36.6, 279.0], [36.7, 279.0], [36.8, 279.0], [36.9, 280.0], [37.0, 280.0], [37.1, 280.0], [37.2, 281.0], [37.3, 281.0], [37.4, 281.0], [37.5, 282.0], [37.6, 282.0], [37.7, 283.0], [37.8, 283.0], [37.9, 284.0], [38.0, 284.0], [38.1, 285.0], [38.2, 285.0], [38.3, 285.0], [38.4, 286.0], [38.5, 286.0], [38.6, 286.0], [38.7, 287.0], [38.8, 287.0], [38.9, 287.0], [39.0, 287.0], [39.1, 288.0], [39.2, 288.0], [39.3, 288.0], [39.4, 289.0], [39.5, 289.0], [39.6, 290.0], [39.7, 290.0], [39.8, 290.0], [39.9, 290.0], [40.0, 291.0], [40.1, 291.0], [40.2, 292.0], [40.3, 292.0], [40.4, 292.0], [40.5, 293.0], [40.6, 293.0], [40.7, 294.0], [40.8, 294.0], [40.9, 295.0], [41.0, 295.0], [41.1, 295.0], [41.2, 296.0], [41.3, 296.0], [41.4, 296.0], [41.5, 297.0], [41.6, 297.0], [41.7, 298.0], [41.8, 298.0], [41.9, 299.0], [42.0, 299.0], [42.1, 300.0], [42.2, 300.0], [42.3, 300.0], [42.4, 301.0], [42.5, 301.0], [42.6, 301.0], [42.7, 302.0], [42.8, 302.0], [42.9, 302.0], [43.0, 303.0], [43.1, 303.0], [43.2, 303.0], [43.3, 303.0], [43.4, 304.0], [43.5, 304.0], [43.6, 304.0], [43.7, 305.0], [43.8, 305.0], [43.9, 305.0], [44.0, 306.0], [44.1, 306.0], [44.2, 307.0], [44.3, 307.0], [44.4, 308.0], [44.5, 308.0], [44.6, 309.0], [44.7, 309.0], [44.8, 309.0], [44.9, 310.0], [45.0, 311.0], [45.1, 311.0], [45.2, 311.0], [45.3, 311.0], [45.4, 312.0], [45.5, 312.0], [45.6, 312.0], [45.7, 312.0], [45.8, 313.0], [45.9, 313.0], [46.0, 314.0], [46.1, 314.0], [46.2, 315.0], [46.3, 315.0], [46.4, 315.0], [46.5, 316.0], [46.6, 316.0], [46.7, 317.0], [46.8, 317.0], [46.9, 317.0], [47.0, 318.0], [47.1, 318.0], [47.2, 318.0], [47.3, 318.0], [47.4, 319.0], [47.5, 319.0], [47.6, 319.0], [47.7, 320.0], [47.8, 321.0], [47.9, 321.0], [48.0, 321.0], [48.1, 322.0], [48.2, 322.0], [48.3, 323.0], [48.4, 323.0], [48.5, 323.0], [48.6, 324.0], [48.7, 324.0], [48.8, 324.0], [48.9, 325.0], [49.0, 325.0], [49.1, 326.0], [49.2, 326.0], [49.3, 326.0], [49.4, 327.0], [49.5, 327.0], [49.6, 327.0], [49.7, 328.0], [49.8, 328.0], [49.9, 329.0], [50.0, 329.0], [50.1, 329.0], [50.2, 330.0], [50.3, 330.0], [50.4, 331.0], [50.5, 331.0], [50.6, 331.0], [50.7, 331.0], [50.8, 331.0], [50.9, 332.0], [51.0, 332.0], [51.1, 332.0], [51.2, 333.0], [51.3, 334.0], [51.4, 334.0], [51.5, 334.0], [51.6, 335.0], [51.7, 335.0], [51.8, 336.0], [51.9, 336.0], [52.0, 336.0], [52.1, 337.0], [52.2, 337.0], [52.3, 338.0], [52.4, 338.0], [52.5, 339.0], [52.6, 339.0], [52.7, 339.0], [52.8, 340.0], [52.9, 340.0], [53.0, 341.0], [53.1, 341.0], [53.2, 341.0], [53.3, 341.0], [53.4, 342.0], [53.5, 342.0], [53.6, 342.0], [53.7, 343.0], [53.8, 343.0], [53.9, 344.0], [54.0, 344.0], [54.1, 344.0], [54.2, 345.0], [54.3, 345.0], [54.4, 345.0], [54.5, 346.0], [54.6, 346.0], [54.7, 347.0], [54.8, 347.0], [54.9, 347.0], [55.0, 348.0], [55.1, 348.0], [55.2, 349.0], [55.3, 349.0], [55.4, 350.0], [55.5, 351.0], [55.6, 351.0], [55.7, 352.0], [55.8, 352.0], [55.9, 352.0], [56.0, 352.0], [56.1, 353.0], [56.2, 353.0], [56.3, 354.0], [56.4, 354.0], [56.5, 354.0], [56.6, 355.0], [56.7, 355.0], [56.8, 356.0], [56.9, 356.0], [57.0, 356.0], [57.1, 357.0], [57.2, 357.0], [57.3, 358.0], [57.4, 358.0], [57.5, 358.0], [57.6, 359.0], [57.7, 359.0], [57.8, 359.0], [57.9, 360.0], [58.0, 361.0], [58.1, 361.0], [58.2, 362.0], [58.3, 362.0], [58.4, 363.0], [58.5, 363.0], [58.6, 364.0], [58.7, 364.0], [58.8, 364.0], [58.9, 365.0], [59.0, 365.0], [59.1, 365.0], [59.2, 366.0], [59.3, 366.0], [59.4, 367.0], [59.5, 367.0], [59.6, 368.0], [59.7, 368.0], [59.8, 368.0], [59.9, 368.0], [60.0, 369.0], [60.1, 369.0], [60.2, 370.0], [60.3, 370.0], [60.4, 371.0], [60.5, 371.0], [60.6, 372.0], [60.7, 372.0], [60.8, 372.0], [60.9, 373.0], [61.0, 373.0], [61.1, 374.0], [61.2, 374.0], [61.3, 374.0], [61.4, 375.0], [61.5, 375.0], [61.6, 376.0], [61.7, 376.0], [61.8, 376.0], [61.9, 376.0], [62.0, 377.0], [62.1, 377.0], [62.2, 377.0], [62.3, 378.0], [62.4, 378.0], [62.5, 379.0], [62.6, 379.0], [62.7, 380.0], [62.8, 380.0], [62.9, 380.0], [63.0, 381.0], [63.1, 382.0], [63.2, 383.0], [63.3, 383.0], [63.4, 384.0], [63.5, 385.0], [63.6, 385.0], [63.7, 386.0], [63.8, 386.0], [63.9, 387.0], [64.0, 388.0], [64.1, 388.0], [64.2, 388.0], [64.3, 389.0], [64.4, 390.0], [64.5, 390.0], [64.6, 390.0], [64.7, 391.0], [64.8, 391.0], [64.9, 391.0], [65.0, 392.0], [65.1, 393.0], [65.2, 393.0], [65.3, 394.0], [65.4, 394.0], [65.5, 394.0], [65.6, 395.0], [65.7, 396.0], [65.8, 396.0], [65.9, 397.0], [66.0, 397.0], [66.1, 398.0], [66.2, 398.0], [66.3, 399.0], [66.4, 400.0], [66.5, 401.0], [66.6, 402.0], [66.7, 402.0], [66.8, 402.0], [66.9, 403.0], [67.0, 404.0], [67.1, 405.0], [67.2, 405.0], [67.3, 407.0], [67.4, 407.0], [67.5, 408.0], [67.6, 408.0], [67.7, 409.0], [67.8, 410.0], [67.9, 410.0], [68.0, 410.0], [68.1, 411.0], [68.2, 412.0], [68.3, 413.0], [68.4, 413.0], [68.5, 414.0], [68.6, 414.0], [68.7, 415.0], [68.8, 415.0], [68.9, 416.0], [69.0, 416.0], [69.1, 417.0], [69.2, 418.0], [69.3, 419.0], [69.4, 420.0], [69.5, 420.0], [69.6, 421.0], [69.7, 421.0], [69.8, 422.0], [69.9, 423.0], [70.0, 424.0], [70.1, 425.0], [70.2, 425.0], [70.3, 426.0], [70.4, 426.0], [70.5, 427.0], [70.6, 428.0], [70.7, 429.0], [70.8, 430.0], [70.9, 431.0], [71.0, 432.0], [71.1, 433.0], [71.2, 433.0], [71.3, 434.0], [71.4, 435.0], [71.5, 435.0], [71.6, 436.0], [71.7, 436.0], [71.8, 437.0], [71.9, 437.0], [72.0, 438.0], [72.1, 438.0], [72.2, 439.0], [72.3, 439.0], [72.4, 440.0], [72.5, 441.0], [72.6, 442.0], [72.7, 442.0], [72.8, 443.0], [72.9, 443.0], [73.0, 444.0], [73.1, 444.0], [73.2, 445.0], [73.3, 446.0], [73.4, 446.0], [73.5, 447.0], [73.6, 447.0], [73.7, 448.0], [73.8, 448.0], [73.9, 448.0], [74.0, 450.0], [74.1, 450.0], [74.2, 451.0], [74.3, 451.0], [74.4, 452.0], [74.5, 453.0], [74.6, 453.0], [74.7, 454.0], [74.8, 454.0], [74.9, 455.0], [75.0, 456.0], [75.1, 456.0], [75.2, 457.0], [75.3, 458.0], [75.4, 459.0], [75.5, 460.0], [75.6, 461.0], [75.7, 461.0], [75.8, 462.0], [75.9, 463.0], [76.0, 464.0], [76.1, 464.0], [76.2, 465.0], [76.3, 465.0], [76.4, 467.0], [76.5, 467.0], [76.6, 468.0], [76.7, 469.0], [76.8, 470.0], [76.9, 471.0], [77.0, 472.0], [77.1, 473.0], [77.2, 474.0], [77.3, 474.0], [77.4, 475.0], [77.5, 476.0], [77.6, 477.0], [77.7, 479.0], [77.8, 480.0], [77.9, 480.0], [78.0, 482.0], [78.1, 483.0], [78.2, 484.0], [78.3, 485.0], [78.4, 486.0], [78.5, 486.0], [78.6, 487.0], [78.7, 488.0], [78.8, 488.0], [78.9, 489.0], [79.0, 490.0], [79.1, 491.0], [79.2, 493.0], [79.3, 494.0], [79.4, 495.0], [79.5, 496.0], [79.6, 497.0], [79.7, 498.0], [79.8, 498.0], [79.9, 499.0], [80.0, 501.0], [80.1, 501.0], [80.2, 502.0], [80.3, 503.0], [80.4, 504.0], [80.5, 505.0], [80.6, 506.0], [80.7, 507.0], [80.8, 508.0], [80.9, 509.0], [81.0, 510.0], [81.1, 511.0], [81.2, 512.0], [81.3, 513.0], [81.4, 514.0], [81.5, 514.0], [81.6, 515.0], [81.7, 516.0], [81.8, 518.0], [81.9, 519.0], [82.0, 520.0], [82.1, 521.0], [82.2, 523.0], [82.3, 524.0], [82.4, 525.0], [82.5, 526.0], [82.6, 528.0], [82.7, 529.0], [82.8, 530.0], [82.9, 531.0], [83.0, 533.0], [83.1, 534.0], [83.2, 534.0], [83.3, 536.0], [83.4, 538.0], [83.5, 539.0], [83.6, 540.0], [83.7, 542.0], [83.8, 544.0], [83.9, 545.0], [84.0, 547.0], [84.1, 548.0], [84.2, 549.0], [84.3, 551.0], [84.4, 553.0], [84.5, 554.0], [84.6, 555.0], [84.7, 557.0], [84.8, 557.0], [84.9, 559.0], [85.0, 560.0], [85.1, 561.0], [85.2, 563.0], [85.3, 565.0], [85.4, 567.0], [85.5, 568.0], [85.6, 568.0], [85.7, 570.0], [85.8, 572.0], [85.9, 575.0], [86.0, 577.0], [86.1, 578.0], [86.2, 579.0], [86.3, 581.0], [86.4, 582.0], [86.5, 584.0], [86.6, 586.0], [86.7, 588.0], [86.8, 591.0], [86.9, 594.0], [87.0, 595.0], [87.1, 596.0], [87.2, 597.0], [87.3, 600.0], [87.4, 601.0], [87.5, 603.0], [87.6, 605.0], [87.7, 608.0], [87.8, 610.0], [87.9, 612.0], [88.0, 614.0], [88.1, 616.0], [88.2, 617.0], [88.3, 618.0], [88.4, 620.0], [88.5, 621.0], [88.6, 622.0], [88.7, 625.0], [88.8, 626.0], [88.9, 629.0], [89.0, 630.0], [89.1, 632.0], [89.2, 635.0], [89.3, 637.0], [89.4, 640.0], [89.5, 641.0], [89.6, 643.0], [89.7, 648.0], [89.8, 650.0], [89.9, 652.0], [90.0, 655.0], [90.1, 657.0], [90.2, 661.0], [90.3, 663.0], [90.4, 665.0], [90.5, 667.0], [90.6, 673.0], [90.7, 676.0], [90.8, 682.0], [90.9, 684.0], [91.0, 687.0], [91.1, 688.0], [91.2, 692.0], [91.3, 694.0], [91.4, 697.0], [91.5, 700.0], [91.6, 704.0], [91.7, 708.0], [91.8, 710.0], [91.9, 711.0], [92.0, 717.0], [92.1, 719.0], [92.2, 724.0], [92.3, 727.0], [92.4, 731.0], [92.5, 736.0], [92.6, 740.0], [92.7, 744.0], [92.8, 748.0], [92.9, 751.0], [93.0, 754.0], [93.1, 760.0], [93.2, 764.0], [93.3, 766.0], [93.4, 771.0], [93.5, 774.0], [93.6, 778.0], [93.7, 787.0], [93.8, 794.0], [93.9, 803.0], [94.0, 808.0], [94.1, 815.0], [94.2, 822.0], [94.3, 830.0], [94.4, 846.0], [94.5, 857.0], [94.6, 866.0], [94.7, 872.0], [94.8, 883.0], [94.9, 892.0], [95.0, 893.0], [95.1, 900.0], [95.2, 910.0], [95.3, 923.0], [95.4, 936.0], [95.5, 953.0], [95.6, 968.0], [95.7, 975.0], [95.8, 986.0], [95.9, 997.0], [96.0, 1008.0], [96.1, 1012.0], [96.2, 1015.0], [96.3, 1029.0], [96.4, 1043.0], [96.5, 1049.0], [96.6, 1089.0], [96.7, 1105.0], [96.8, 1119.0], [96.9, 1146.0], [97.0, 1181.0], [97.1, 1199.0], [97.2, 1226.0], [97.3, 1272.0], [97.4, 1299.0], [97.5, 1319.0], [97.6, 1351.0], [97.7, 1376.0], [97.8, 1412.0], [97.9, 1447.0], [98.0, 1474.0], [98.1, 1535.0], [98.2, 1564.0], [98.3, 1593.0], [98.4, 1642.0], [98.5, 1719.0], [98.6, 1745.0], [98.7, 1791.0], [98.8, 1810.0], [98.9, 1863.0], [99.0, 1902.0], [99.1, 1952.0], [99.2, 2073.0], [99.3, 2232.0], [99.4, 2763.0], [99.5, 3355.0], [99.6, 3745.0], [99.7, 3873.0], [99.8, 4094.0], [99.9, 6064.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1263.0, "series": [{"data": [[0.0, 196.0], [600.0, 218.0], [700.0, 124.0], [800.0, 62.0], [900.0, 46.0], [1000.0, 37.0], [1100.0, 23.0], [1200.0, 16.0], [1300.0, 18.0], [1400.0, 15.0], [1500.0, 13.0], [100.0, 745.0], [1600.0, 8.0], [1700.0, 16.0], [1800.0, 12.0], [1900.0, 7.0], [2000.0, 5.0], [2100.0, 3.0], [2300.0, 2.0], [2200.0, 2.0], [42700.0, 1.0], [2600.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [3000.0, 2.0], [3100.0, 1.0], [200.0, 1242.0], [3300.0, 1.0], [3200.0, 1.0], [3400.0, 1.0], [3600.0, 3.0], [3700.0, 3.0], [3800.0, 3.0], [3900.0, 3.0], [4000.0, 2.0], [4100.0, 1.0], [4200.0, 1.0], [300.0, 1263.0], [5100.0, 1.0], [5300.0, 1.0], [6000.0, 1.0], [400.0, 704.0], [6400.0, 1.0], [6700.0, 2.0], [7000.0, 1.0], [500.0, 381.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 42700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 4152.0, "series": [{"data": [[0.0, 4152.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 938.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 1.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.956435643564355, "minX": 1.60232772E12, "maxY": 10.0, "series": [{"data": [[1.60232772E12, 9.999234303215925], [1.6023279E12, 9.956435643564355], [1.60232784E12, 10.0], [1.60232778E12, 10.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023279E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 288.0, "minX": 1.0, "maxY": 858.0, "series": [{"data": [[8.0, 288.0], [4.0, 345.0], [2.0, 380.0], [1.0, 658.0], [9.0, 620.0], [10.0, 416.1526437668861], [5.0, 858.0], [6.0, 300.0], [3.0, 354.0], [7.0, 320.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[9.991331150067435, 416.22539009824584]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 7003.916666666667, "minX": 1.60232772E12, "maxY": 1.0186720783333333E7, "series": [{"data": [[1.60232772E12, 9465752.25], [1.6023279E12, 6718685.333333333], [1.60232784E12, 9606354.616666667], [1.60232778E12, 1.0186720783333333E7]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.60232772E12, 8650.916666666666], [1.6023279E12, 7003.916666666667], [1.60232784E12, 9391.45], [1.60232778E12, 10103.516666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023279E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 380.99114441416884, "minX": 1.60232772E12, "maxY": 451.7947932618684, "series": [{"data": [[1.60232772E12, 451.7947932618684], [1.6023279E12, 384.5475247524756], [1.60232784E12, 442.7107320540154], [1.60232778E12, 380.99114441416884]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023279E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 376.52520435967256, "minX": 1.60232772E12, "maxY": 447.04287901990864, "series": [{"data": [[1.60232772E12, 447.04287901990864], [1.6023279E12, 380.9643564356437], [1.60232784E12, 438.5678749111585], [1.60232778E12, 376.52520435967256]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023279E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.002970297029702973, "minX": 1.60232772E12, "maxY": 0.08805513016845337, "series": [{"data": [[1.60232772E12, 0.08805513016845337], [1.6023279E12, 0.002970297029702973], [1.60232784E12, 0.005685856432125092], [1.60232778E12, 0.006130790190735705]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023279E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 4.0, "minX": 1.60232772E12, "maxY": 7098.0, "series": [{"data": [[1.60232772E12, 6790.0], [1.6023279E12, 6428.0], [1.60232784E12, 4220.0], [1.60232778E12, 7098.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.60232772E12, 20.0], [1.6023279E12, 34.29699927687645], [1.60232784E12, 14.0], [1.60232778E12, 26.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.60232772E12, 21.878600249290468], [1.6023279E12, 37.008900096416475], [1.60232784E12, 14.0], [1.60232778E12, 27.086200280189516]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.60232772E12, 20.832999688386916], [1.6023279E12, 35.81349963843822], [1.60232784E12, 14.0], [1.60232778E12, 26.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.60232772E12, 13.0], [1.6023279E12, 4.0], [1.60232784E12, 13.0], [1.60232778E12, 4.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.60232772E12, 331.0], [1.6023279E12, 327.0], [1.60232784E12, 325.0], [1.60232778E12, 334.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023279E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 27.0, "minX": 1.0, "maxY": 42705.0, "series": [{"data": [[33.0, 287.0], [32.0, 274.0], [34.0, 271.5], [35.0, 259.0], [37.0, 266.0], [36.0, 224.5], [38.0, 198.0], [39.0, 218.5], [42.0, 201.0], [4.0, 2300.5], [5.0, 943.0], [7.0, 27.0], [8.0, 286.5], [9.0, 568.0], [10.0, 595.5], [11.0, 1250.5], [12.0, 608.0], [13.0, 452.5], [14.0, 519.5], [15.0, 445.0], [1.0, 620.0], [16.0, 360.5], [17.0, 451.0], [18.0, 380.0], [19.0, 359.5], [20.0, 362.5], [21.0, 377.0], [22.0, 367.0], [23.0, 366.0], [24.0, 372.5], [25.0, 359.0], [26.0, 321.5], [27.0, 326.0], [28.0, 319.5], [29.0, 311.0], [30.0, 304.0], [31.0, 290.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[25.0, 42705.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 27.0, "minX": 1.0, "maxY": 42705.0, "series": [{"data": [[33.0, 280.0], [32.0, 272.0], [34.0, 265.0], [35.0, 250.0], [37.0, 263.0], [36.0, 219.5], [38.0, 196.5], [39.0, 217.5], [42.0, 201.0], [4.0, 2299.5], [5.0, 934.0], [7.0, 27.0], [8.0, 286.0], [9.0, 568.0], [10.0, 595.0], [11.0, 1249.5], [12.0, 604.0], [13.0, 447.5], [14.0, 511.5], [15.0, 445.0], [1.0, 614.0], [16.0, 355.5], [17.0, 448.0], [18.0, 367.0], [19.0, 352.0], [20.0, 347.5], [21.0, 373.5], [22.0, 363.5], [23.0, 360.0], [24.0, 362.0], [25.0, 353.0], [26.0, 315.5], [27.0, 319.0], [28.0, 311.5], [29.0, 305.0], [30.0, 300.0], [31.0, 285.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[25.0, 42705.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 42.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 16.666666666666668, "minX": 1.60232772E12, "maxY": 24.466666666666665, "series": [{"data": [[1.60232772E12, 21.933333333333334], [1.6023279E12, 16.666666666666668], [1.60232784E12, 23.45], [1.60232778E12, 24.466666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023279E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232772E12, "maxY": 24.466666666666665, "series": [{"data": [[1.60232772E12, 21.766666666666666], [1.6023279E12, 16.833333333333332], [1.60232784E12, 23.433333333333334], [1.60232778E12, 24.466666666666665]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.60232784E12, 0.016666666666666666]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6023279E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232772E12, "maxY": 24.466666666666665, "series": [{"data": [[1.60232772E12, 21.766666666666666], [1.6023279E12, 16.833333333333332], [1.60232784E12, 23.433333333333334], [1.60232778E12, 24.466666666666665]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.60232784E12, 0.016666666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023279E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.60232772E12, "maxY": 24.466666666666665, "series": [{"data": [[1.60232772E12, 21.766666666666666], [1.6023279E12, 16.833333333333332], [1.60232784E12, 23.433333333333334], [1.60232778E12, 24.466666666666665]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.60232784E12, 0.016666666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6023279E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 0);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

