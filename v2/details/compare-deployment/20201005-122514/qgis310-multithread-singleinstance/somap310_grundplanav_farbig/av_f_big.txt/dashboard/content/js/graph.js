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
        data: {"result": {"minY": 2619.0, "minX": 0.0, "maxY": 24084.0, "series": [{"data": [[0.0, 2619.0], [0.1, 2619.0], [0.2, 3191.0], [0.3, 3390.0], [0.4, 3390.0], [0.5, 3817.0], [0.6, 4289.0], [0.7, 4740.0], [0.8, 4740.0], [0.9, 5209.0], [1.0, 5409.0], [1.1, 6034.0], [1.2, 6034.0], [1.3, 6188.0], [1.4, 6424.0], [1.5, 6828.0], [1.6, 6828.0], [1.7, 6934.0], [1.8, 7094.0], [1.9, 7094.0], [2.0, 9626.0], [2.1, 10873.0], [2.2, 11157.0], [2.3, 11157.0], [2.4, 11916.0], [2.5, 12181.0], [2.6, 12478.0], [2.7, 12478.0], [2.8, 12582.0], [2.9, 12819.0], [3.0, 12869.0], [3.1, 12869.0], [3.2, 12932.0], [3.3, 12947.0], [3.4, 12947.0], [3.5, 13036.0], [3.6, 13044.0], [3.7, 13083.0], [3.8, 13083.0], [3.9, 13085.0], [4.0, 13088.0], [4.1, 13089.0], [4.2, 13089.0], [4.3, 13101.0], [4.4, 13185.0], [4.5, 13197.0], [4.6, 13197.0], [4.7, 13212.0], [4.8, 13215.0], [4.9, 13218.0], [5.0, 13218.0], [5.1, 13256.0], [5.2, 13258.0], [5.3, 13258.0], [5.4, 13288.0], [5.5, 13289.0], [5.6, 13291.0], [5.7, 13291.0], [5.8, 13326.0], [5.9, 13337.0], [6.0, 13344.0], [6.1, 13344.0], [6.2, 13363.0], [6.3, 13401.0], [6.4, 13409.0], [6.5, 13409.0], [6.6, 13422.0], [6.7, 13426.0], [6.8, 13426.0], [6.9, 13434.0], [7.0, 13451.0], [7.1, 13516.0], [7.2, 13516.0], [7.3, 13549.0], [7.4, 13553.0], [7.5, 13553.0], [7.6, 13553.0], [7.7, 13584.0], [7.8, 13622.0], [7.9, 13647.0], [8.0, 13647.0], [8.1, 13649.0], [8.2, 13658.0], [8.3, 13680.0], [8.4, 13680.0], [8.5, 13683.0], [8.6, 13697.0], [8.7, 13697.0], [8.8, 13707.0], [8.9, 13733.0], [9.0, 13737.0], [9.1, 13737.0], [9.2, 13739.0], [9.3, 13764.0], [9.4, 13765.0], [9.5, 13765.0], [9.6, 13768.0], [9.7, 13771.0], [9.8, 13777.0], [9.9, 13777.0], [10.0, 13791.0], [10.1, 13796.0], [10.2, 13796.0], [10.3, 13796.0], [10.4, 13797.0], [10.5, 13801.0], [10.6, 13801.0], [10.7, 13806.0], [10.8, 13818.0], [10.9, 13820.0], [11.0, 13820.0], [11.1, 13846.0], [11.2, 13848.0], [11.3, 13871.0], [11.4, 13871.0], [11.5, 13900.0], [11.6, 13947.0], [11.7, 13947.0], [11.8, 13952.0], [11.9, 13954.0], [12.0, 13985.0], [12.1, 13985.0], [12.2, 14002.0], [12.3, 14005.0], [12.4, 14014.0], [12.5, 14014.0], [12.6, 14032.0], [12.7, 14046.0], [12.8, 14049.0], [12.9, 14049.0], [13.0, 14063.0], [13.1, 14080.0], [13.2, 14107.0], [13.3, 14107.0], [13.4, 14110.0], [13.5, 14161.0], [13.6, 14161.0], [13.7, 14164.0], [13.8, 14176.0], [13.9, 14177.0], [14.0, 14177.0], [14.1, 14182.0], [14.2, 14185.0], [14.3, 14209.0], [14.4, 14209.0], [14.5, 14228.0], [14.6, 14237.0], [14.7, 14246.0], [14.8, 14246.0], [14.9, 14246.0], [15.0, 14284.0], [15.1, 14284.0], [15.2, 14285.0], [15.3, 14286.0], [15.4, 14291.0], [15.5, 14291.0], [15.6, 14303.0], [15.7, 14304.0], [15.8, 14319.0], [15.9, 14319.0], [16.0, 14336.0], [16.1, 14344.0], [16.2, 14351.0], [16.3, 14351.0], [16.4, 14353.0], [16.5, 14411.0], [16.6, 14417.0], [16.7, 14417.0], [16.8, 14435.0], [16.9, 14454.0], [17.0, 14454.0], [17.1, 14463.0], [17.2, 14463.0], [17.3, 14469.0], [17.4, 14469.0], [17.5, 14477.0], [17.6, 14490.0], [17.7, 14505.0], [17.8, 14505.0], [17.9, 14506.0], [18.0, 14515.0], [18.1, 14526.0], [18.2, 14526.0], [18.3, 14543.0], [18.4, 14543.0], [18.5, 14543.0], [18.6, 14564.0], [18.7, 14606.0], [18.8, 14643.0], [18.9, 14643.0], [19.0, 14648.0], [19.1, 14652.0], [19.2, 14677.0], [19.3, 14677.0], [19.4, 14680.0], [19.5, 14691.0], [19.6, 14691.0], [19.7, 14691.0], [19.8, 14707.0], [19.9, 14711.0], [20.0, 14723.0], [20.1, 14723.0], [20.2, 14727.0], [20.3, 14740.0], [20.4, 14740.0], [20.5, 14756.0], [20.6, 14762.0], [20.7, 14767.0], [20.8, 14767.0], [20.9, 14797.0], [21.0, 14810.0], [21.1, 14837.0], [21.2, 14837.0], [21.3, 14838.0], [21.4, 14869.0], [21.5, 14873.0], [21.6, 14873.0], [21.7, 14878.0], [21.8, 14882.0], [21.9, 14882.0], [22.0, 14896.0], [22.1, 14898.0], [22.2, 14939.0], [22.3, 14939.0], [22.4, 14959.0], [22.5, 14968.0], [22.6, 14985.0], [22.7, 14985.0], [22.8, 14989.0], [22.9, 14994.0], [23.0, 15007.0], [23.1, 15007.0], [23.2, 15013.0], [23.3, 15073.0], [23.4, 15073.0], [23.5, 15080.0], [23.6, 15082.0], [23.7, 15090.0], [23.8, 15090.0], [23.9, 15091.0], [24.0, 15095.0], [24.1, 15121.0], [24.2, 15121.0], [24.3, 15181.0], [24.4, 15211.0], [24.5, 15219.0], [24.6, 15219.0], [24.7, 15223.0], [24.8, 15247.0], [24.9, 15249.0], [25.0, 15249.0], [25.1, 15265.0], [25.2, 15278.0], [25.3, 15278.0], [25.4, 15279.0], [25.5, 15300.0], [25.6, 15340.0], [25.7, 15340.0], [25.8, 15354.0], [25.9, 15358.0], [26.0, 15359.0], [26.1, 15359.0], [26.2, 15370.0], [26.3, 15378.0], [26.4, 15395.0], [26.5, 15395.0], [26.6, 15463.0], [26.7, 15539.0], [26.8, 15539.0], [26.9, 15541.0], [27.0, 15565.0], [27.1, 15602.0], [27.2, 15602.0], [27.3, 15608.0], [27.4, 15652.0], [27.5, 15655.0], [27.6, 15655.0], [27.7, 15699.0], [27.8, 15750.0], [27.9, 15783.0], [28.0, 15783.0], [28.1, 15818.0], [28.2, 15841.0], [28.3, 15847.0], [28.4, 15847.0], [28.5, 15863.0], [28.6, 15876.0], [28.7, 15876.0], [28.8, 15876.0], [28.9, 15911.0], [29.0, 15939.0], [29.1, 15939.0], [29.2, 15953.0], [29.3, 15954.0], [29.4, 15958.0], [29.5, 15958.0], [29.6, 15961.0], [29.7, 15965.0], [29.8, 15982.0], [29.9, 15982.0], [30.0, 15984.0], [30.1, 15997.0], [30.2, 15997.0], [30.3, 16009.0], [30.4, 16017.0], [30.5, 16019.0], [30.6, 16019.0], [30.7, 16040.0], [30.8, 16065.0], [30.9, 16066.0], [31.0, 16066.0], [31.1, 16066.0], [31.2, 16074.0], [31.3, 16085.0], [31.4, 16085.0], [31.5, 16095.0], [31.6, 16096.0], [31.7, 16096.0], [31.8, 16107.0], [31.9, 16111.0], [32.0, 16115.0], [32.1, 16115.0], [32.2, 16137.0], [32.3, 16153.0], [32.4, 16153.0], [32.5, 16153.0], [32.6, 16159.0], [32.7, 16185.0], [32.8, 16219.0], [32.9, 16219.0], [33.0, 16223.0], [33.1, 16229.0], [33.2, 16243.0], [33.3, 16243.0], [33.4, 16266.0], [33.5, 16270.0], [33.6, 16270.0], [33.7, 16278.0], [33.8, 16296.0], [33.9, 16298.0], [34.0, 16298.0], [34.1, 16305.0], [34.2, 16334.0], [34.3, 16345.0], [34.4, 16345.0], [34.5, 16367.0], [34.6, 16415.0], [34.7, 16416.0], [34.8, 16416.0], [34.9, 16427.0], [35.0, 16429.0], [35.1, 16429.0], [35.2, 16434.0], [35.3, 16472.0], [35.4, 16482.0], [35.5, 16482.0], [35.6, 16488.0], [35.7, 16537.0], [35.8, 16539.0], [35.9, 16539.0], [36.0, 16600.0], [36.1, 16604.0], [36.2, 16616.0], [36.3, 16616.0], [36.4, 16630.0], [36.5, 16630.0], [36.6, 16637.0], [36.7, 16637.0], [36.8, 16679.0], [36.9, 16690.0], [37.0, 16690.0], [37.1, 16695.0], [37.2, 16697.0], [37.3, 16704.0], [37.4, 16704.0], [37.5, 16714.0], [37.6, 16740.0], [37.7, 16751.0], [37.8, 16751.0], [37.9, 16760.0], [38.0, 16799.0], [38.1, 16809.0], [38.2, 16809.0], [38.3, 16818.0], [38.4, 16860.0], [38.5, 16860.0], [38.6, 16871.0], [38.7, 16878.0], [38.8, 16891.0], [38.9, 16891.0], [39.0, 16936.0], [39.1, 16945.0], [39.2, 16953.0], [39.3, 16953.0], [39.4, 16957.0], [39.5, 17000.0], [39.6, 17014.0], [39.7, 17014.0], [39.8, 17059.0], [39.9, 17079.0], [40.0, 17098.0], [40.1, 17098.0], [40.2, 17103.0], [40.3, 17112.0], [40.4, 17112.0], [40.5, 17113.0], [40.6, 17138.0], [40.7, 17159.0], [40.8, 17159.0], [40.9, 17165.0], [41.0, 17180.0], [41.1, 17181.0], [41.2, 17181.0], [41.3, 17196.0], [41.4, 17210.0], [41.5, 17230.0], [41.6, 17230.0], [41.7, 17236.0], [41.8, 17239.0], [41.9, 17239.0], [42.0, 17256.0], [42.1, 17262.0], [42.2, 17275.0], [42.3, 17275.0], [42.4, 17289.0], [42.5, 17301.0], [42.6, 17321.0], [42.7, 17321.0], [42.8, 17325.0], [42.9, 17326.0], [43.0, 17330.0], [43.1, 17330.0], [43.2, 17351.0], [43.3, 17358.0], [43.4, 17358.0], [43.5, 17377.0], [43.6, 17390.0], [43.7, 17403.0], [43.8, 17403.0], [43.9, 17403.0], [44.0, 17411.0], [44.1, 17416.0], [44.2, 17416.0], [44.3, 17424.0], [44.4, 17426.0], [44.5, 17462.0], [44.6, 17462.0], [44.7, 17499.0], [44.8, 17504.0], [44.9, 17518.0], [45.0, 17518.0], [45.1, 17545.0], [45.2, 17559.0], [45.3, 17559.0], [45.4, 17562.0], [45.5, 17577.0], [45.6, 17620.0], [45.7, 17620.0], [45.8, 17622.0], [45.9, 17634.0], [46.0, 17636.0], [46.1, 17636.0], [46.2, 17700.0], [46.3, 17712.0], [46.4, 17722.0], [46.5, 17722.0], [46.6, 17738.0], [46.7, 17776.0], [46.8, 17776.0], [46.9, 17787.0], [47.0, 17817.0], [47.1, 17835.0], [47.2, 17835.0], [47.3, 17836.0], [47.4, 17839.0], [47.5, 17862.0], [47.6, 17862.0], [47.7, 17937.0], [47.8, 17947.0], [47.9, 17960.0], [48.0, 17960.0], [48.1, 17966.0], [48.2, 17976.0], [48.3, 17980.0], [48.4, 17980.0], [48.5, 17990.0], [48.6, 18017.0], [48.7, 18017.0], [48.8, 18044.0], [48.9, 18082.0], [49.0, 18087.0], [49.1, 18087.0], [49.2, 18133.0], [49.3, 18181.0], [49.4, 18208.0], [49.5, 18208.0], [49.6, 18220.0], [49.7, 18239.0], [49.8, 18268.0], [49.9, 18268.0], [50.0, 18274.0], [50.1, 18275.0], [50.2, 18275.0], [50.3, 18292.0], [50.4, 18309.0], [50.5, 18333.0], [50.6, 18333.0], [50.7, 18398.0], [50.8, 18419.0], [50.9, 18420.0], [51.0, 18420.0], [51.1, 18423.0], [51.2, 18498.0], [51.3, 18515.0], [51.4, 18515.0], [51.5, 18517.0], [51.6, 18525.0], [51.7, 18525.0], [51.8, 18539.0], [51.9, 18572.0], [52.0, 18597.0], [52.1, 18597.0], [52.2, 18612.0], [52.3, 18616.0], [52.4, 18620.0], [52.5, 18620.0], [52.6, 18633.0], [52.7, 18645.0], [52.8, 18658.0], [52.9, 18658.0], [53.0, 18668.0], [53.1, 18699.0], [53.2, 18751.0], [53.3, 18751.0], [53.4, 18756.0], [53.5, 18799.0], [53.6, 18799.0], [53.7, 18828.0], [53.8, 18832.0], [53.9, 18866.0], [54.0, 18866.0], [54.1, 18920.0], [54.2, 18934.0], [54.3, 18956.0], [54.4, 18956.0], [54.5, 18975.0], [54.6, 18979.0], [54.7, 19011.0], [54.8, 19011.0], [54.9, 19036.0], [55.0, 19042.0], [55.1, 19042.0], [55.2, 19085.0], [55.3, 19119.0], [55.4, 19155.0], [55.5, 19155.0], [55.6, 19230.0], [55.7, 19234.0], [55.8, 19302.0], [55.9, 19302.0], [56.0, 19336.0], [56.1, 19357.0], [56.2, 19363.0], [56.3, 19363.0], [56.4, 19383.0], [56.5, 19385.0], [56.6, 19409.0], [56.7, 19409.0], [56.8, 19415.0], [56.9, 19437.0], [57.0, 19437.0], [57.1, 19437.0], [57.2, 19439.0], [57.3, 19449.0], [57.4, 19449.0], [57.5, 19452.0], [57.6, 19456.0], [57.7, 19465.0], [57.8, 19465.0], [57.9, 19466.0], [58.0, 19471.0], [58.1, 19472.0], [58.2, 19472.0], [58.3, 19474.0], [58.4, 19475.0], [58.5, 19475.0], [58.6, 19490.0], [58.7, 19494.0], [58.8, 19501.0], [58.9, 19501.0], [59.0, 19503.0], [59.1, 19508.0], [59.2, 19530.0], [59.3, 19530.0], [59.4, 19549.0], [59.5, 19553.0], [59.6, 19559.0], [59.7, 19559.0], [59.8, 19569.0], [59.9, 19573.0], [60.0, 19583.0], [60.1, 19583.0], [60.2, 19597.0], [60.3, 19599.0], [60.4, 19599.0], [60.5, 19599.0], [60.6, 19611.0], [60.7, 19611.0], [60.8, 19611.0], [60.9, 19615.0], [61.0, 19616.0], [61.1, 19618.0], [61.2, 19618.0], [61.3, 19624.0], [61.4, 19633.0], [61.5, 19644.0], [61.6, 19644.0], [61.7, 19645.0], [61.8, 19647.0], [61.9, 19647.0], [62.0, 19655.0], [62.1, 19658.0], [62.2, 19658.0], [62.3, 19658.0], [62.4, 19664.0], [62.5, 19666.0], [62.6, 19668.0], [62.7, 19668.0], [62.8, 19670.0], [62.9, 19670.0], [63.0, 19676.0], [63.1, 19676.0], [63.2, 19677.0], [63.3, 19692.0], [63.4, 19692.0], [63.5, 19701.0], [63.6, 19702.0], [63.7, 19717.0], [63.8, 19717.0], [63.9, 19723.0], [64.0, 19736.0], [64.1, 19743.0], [64.2, 19743.0], [64.3, 19747.0], [64.4, 19765.0], [64.5, 19776.0], [64.6, 19776.0], [64.7, 19780.0], [64.8, 19784.0], [64.9, 19790.0], [65.0, 19790.0], [65.1, 19793.0], [65.2, 19793.0], [65.3, 19793.0], [65.4, 19794.0], [65.5, 19810.0], [65.6, 19810.0], [65.7, 19810.0], [65.8, 19819.0], [65.9, 19820.0], [66.0, 19821.0], [66.1, 19821.0], [66.2, 19824.0], [66.3, 19825.0], [66.4, 19827.0], [66.5, 19827.0], [66.6, 19832.0], [66.7, 19836.0], [66.8, 19836.0], [66.9, 19838.0], [67.0, 19841.0], [67.1, 19843.0], [67.2, 19843.0], [67.3, 19857.0], [67.4, 19860.0], [67.5, 19869.0], [67.6, 19869.0], [67.7, 19872.0], [67.8, 19873.0], [67.9, 19877.0], [68.0, 19877.0], [68.1, 19879.0], [68.2, 19882.0], [68.3, 19893.0], [68.4, 19893.0], [68.5, 19899.0], [68.6, 19903.0], [68.7, 19903.0], [68.8, 19904.0], [68.9, 19907.0], [69.0, 19907.0], [69.1, 19907.0], [69.2, 19910.0], [69.3, 19911.0], [69.4, 19912.0], [69.5, 19912.0], [69.6, 19918.0], [69.7, 19920.0], [69.8, 19922.0], [69.9, 19922.0], [70.0, 19926.0], [70.1, 19931.0], [70.2, 19931.0], [70.3, 19932.0], [70.4, 19933.0], [70.5, 19940.0], [70.6, 19940.0], [70.7, 19951.0], [70.8, 19956.0], [70.9, 19959.0], [71.0, 19959.0], [71.1, 19959.0], [71.2, 19965.0], [71.3, 19968.0], [71.4, 19968.0], [71.5, 19968.0], [71.6, 19971.0], [71.7, 19971.0], [71.8, 19971.0], [71.9, 19974.0], [72.0, 19977.0], [72.1, 19977.0], [72.2, 19979.0], [72.3, 19985.0], [72.4, 19989.0], [72.5, 19989.0], [72.6, 20000.0], [72.7, 20000.0], [72.8, 20006.0], [72.9, 20006.0], [73.0, 20007.0], [73.1, 20007.0], [73.2, 20008.0], [73.3, 20008.0], [73.4, 20010.0], [73.5, 20022.0], [73.6, 20022.0], [73.7, 20022.0], [73.8, 20036.0], [73.9, 20038.0], [74.0, 20038.0], [74.1, 20038.0], [74.2, 20041.0], [74.3, 20042.0], [74.4, 20042.0], [74.5, 20043.0], [74.6, 20043.0], [74.7, 20046.0], [74.8, 20046.0], [74.9, 20049.0], [75.0, 20052.0], [75.1, 20052.0], [75.2, 20052.0], [75.3, 20054.0], [75.4, 20055.0], [75.5, 20055.0], [75.6, 20056.0], [75.7, 20061.0], [75.8, 20067.0], [75.9, 20067.0], [76.0, 20072.0], [76.1, 20078.0], [76.2, 20085.0], [76.3, 20085.0], [76.4, 20098.0], [76.5, 20104.0], [76.6, 20116.0], [76.7, 20116.0], [76.8, 20120.0], [76.9, 20123.0], [77.0, 20123.0], [77.1, 20129.0], [77.2, 20130.0], [77.3, 20131.0], [77.4, 20131.0], [77.5, 20134.0], [77.6, 20135.0], [77.7, 20139.0], [77.8, 20139.0], [77.9, 20139.0], [78.0, 20146.0], [78.1, 20154.0], [78.2, 20154.0], [78.3, 20159.0], [78.4, 20159.0], [78.5, 20159.0], [78.6, 20165.0], [78.7, 20168.0], [78.8, 20169.0], [78.9, 20169.0], [79.0, 20176.0], [79.1, 20188.0], [79.2, 20189.0], [79.3, 20189.0], [79.4, 20200.0], [79.5, 20201.0], [79.6, 20205.0], [79.7, 20205.0], [79.8, 20212.0], [79.9, 20214.0], [80.0, 20225.0], [80.1, 20225.0], [80.2, 20230.0], [80.3, 20234.0], [80.4, 20234.0], [80.5, 20240.0], [80.6, 20247.0], [80.7, 20253.0], [80.8, 20253.0], [80.9, 20260.0], [81.0, 20266.0], [81.1, 20270.0], [81.2, 20270.0], [81.3, 20278.0], [81.4, 20283.0], [81.5, 20285.0], [81.6, 20285.0], [81.7, 20288.0], [81.8, 20289.0], [81.9, 20289.0], [82.0, 20289.0], [82.1, 20296.0], [82.2, 20301.0], [82.3, 20301.0], [82.4, 20302.0], [82.5, 20312.0], [82.6, 20326.0], [82.7, 20326.0], [82.8, 20331.0], [82.9, 20335.0], [83.0, 20336.0], [83.1, 20336.0], [83.2, 20342.0], [83.3, 20343.0], [83.4, 20343.0], [83.5, 20349.0], [83.6, 20352.0], [83.7, 20354.0], [83.8, 20354.0], [83.9, 20354.0], [84.0, 20356.0], [84.1, 20360.0], [84.2, 20360.0], [84.3, 20363.0], [84.4, 20370.0], [84.5, 20378.0], [84.6, 20378.0], [84.7, 20387.0], [84.8, 20394.0], [84.9, 20417.0], [85.0, 20417.0], [85.1, 20419.0], [85.2, 20420.0], [85.3, 20420.0], [85.4, 20421.0], [85.5, 20435.0], [85.6, 20448.0], [85.7, 20448.0], [85.8, 20449.0], [85.9, 20457.0], [86.0, 20465.0], [86.1, 20465.0], [86.2, 20466.0], [86.3, 20478.0], [86.4, 20480.0], [86.5, 20480.0], [86.6, 20484.0], [86.7, 20486.0], [86.8, 20486.0], [86.9, 20488.0], [87.0, 20493.0], [87.1, 20502.0], [87.2, 20502.0], [87.3, 20534.0], [87.4, 20539.0], [87.5, 20545.0], [87.6, 20545.0], [87.7, 20561.0], [87.8, 20566.0], [87.9, 20571.0], [88.0, 20571.0], [88.1, 20580.0], [88.2, 20592.0], [88.3, 20613.0], [88.4, 20613.0], [88.5, 20622.0], [88.6, 20627.0], [88.7, 20627.0], [88.8, 20637.0], [88.9, 20639.0], [89.0, 20640.0], [89.1, 20640.0], [89.2, 20652.0], [89.3, 20652.0], [89.4, 20658.0], [89.5, 20658.0], [89.6, 20660.0], [89.7, 20661.0], [89.8, 20679.0], [89.9, 20679.0], [90.0, 20689.0], [90.1, 20693.0], [90.2, 20693.0], [90.3, 20693.0], [90.4, 20699.0], [90.5, 20710.0], [90.6, 20710.0], [90.7, 20712.0], [90.8, 20718.0], [90.9, 20741.0], [91.0, 20741.0], [91.1, 20785.0], [91.2, 20799.0], [91.3, 20800.0], [91.4, 20800.0], [91.5, 20843.0], [91.6, 20881.0], [91.7, 20881.0], [91.8, 20886.0], [91.9, 20901.0], [92.0, 20922.0], [92.1, 20922.0], [92.2, 20971.0], [92.3, 21010.0], [92.4, 21034.0], [92.5, 21034.0], [92.6, 21129.0], [92.7, 21146.0], [92.8, 21148.0], [92.9, 21148.0], [93.0, 21185.0], [93.1, 21206.0], [93.2, 21236.0], [93.3, 21236.0], [93.4, 21271.0], [93.5, 21278.0], [93.6, 21278.0], [93.7, 21388.0], [93.8, 21437.0], [93.9, 21481.0], [94.0, 21481.0], [94.1, 21511.0], [94.2, 21550.0], [94.3, 21660.0], [94.4, 21660.0], [94.5, 21678.0], [94.6, 21726.0], [94.7, 21729.0], [94.8, 21729.0], [94.9, 21731.0], [95.0, 21735.0], [95.1, 21735.0], [95.2, 21742.0], [95.3, 21775.0], [95.4, 21956.0], [95.5, 21956.0], [95.6, 21987.0], [95.7, 22006.0], [95.8, 22055.0], [95.9, 22055.0], [96.0, 22099.0], [96.1, 22179.0], [96.2, 22180.0], [96.3, 22180.0], [96.4, 22186.0], [96.5, 22212.0], [96.6, 22215.0], [96.7, 22215.0], [96.8, 22220.0], [96.9, 22224.0], [97.0, 22224.0], [97.1, 22225.0], [97.2, 22229.0], [97.3, 22238.0], [97.4, 22238.0], [97.5, 22252.0], [97.6, 22254.0], [97.7, 22256.0], [97.8, 22256.0], [97.9, 22338.0], [98.0, 22535.0], [98.1, 22644.0], [98.2, 22644.0], [98.3, 22690.0], [98.4, 22835.0], [98.5, 22835.0], [98.6, 22864.0], [98.7, 23201.0], [98.8, 23265.0], [98.9, 23265.0], [99.0, 23322.0], [99.1, 23382.0], [99.2, 23750.0], [99.3, 23750.0], [99.4, 23767.0], [99.5, 23778.0], [99.6, 23947.0], [99.7, 23947.0], [99.8, 24081.0], [99.9, 24084.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2600.0, "maxY": 29.0, "series": [{"data": [[2600.0, 1.0], [3100.0, 1.0], [3300.0, 1.0], [3800.0, 1.0], [4200.0, 1.0], [4700.0, 1.0], [5200.0, 1.0], [5400.0, 1.0], [6000.0, 1.0], [6100.0, 1.0], [6400.0, 1.0], [6800.0, 1.0], [6900.0, 1.0], [7000.0, 1.0], [9600.0, 1.0], [10800.0, 1.0], [11100.0, 1.0], [11900.0, 1.0], [12100.0, 1.0], [12400.0, 1.0], [12500.0, 1.0], [13100.0, 3.0], [13200.0, 8.0], [13000.0, 6.0], [12800.0, 2.0], [13300.0, 4.0], [12900.0, 2.0], [13400.0, 6.0], [13700.0, 13.0], [13600.0, 7.0], [13800.0, 7.0], [13500.0, 5.0], [14100.0, 8.0], [14200.0, 9.0], [14000.0, 8.0], [13900.0, 5.0], [14300.0, 7.0], [14700.0, 9.0], [14400.0, 9.0], [14800.0, 9.0], [14500.0, 7.0], [14600.0, 8.0], [14900.0, 6.0], [15000.0, 8.0], [15300.0, 8.0], [15200.0, 8.0], [15100.0, 2.0], [15600.0, 5.0], [15800.0, 6.0], [15500.0, 3.0], [15700.0, 2.0], [15400.0, 1.0], [15900.0, 10.0], [16200.0, 9.0], [16300.0, 4.0], [16100.0, 8.0], [16000.0, 11.0], [17300.0, 9.0], [16600.0, 10.0], [16500.0, 2.0], [16900.0, 4.0], [17000.0, 5.0], [17100.0, 9.0], [16400.0, 8.0], [16700.0, 6.0], [16800.0, 6.0], [17200.0, 8.0], [17400.0, 8.0], [18200.0, 7.0], [17900.0, 7.0], [17600.0, 4.0], [17800.0, 5.0], [18400.0, 4.0], [17500.0, 6.0], [18000.0, 4.0], [18100.0, 2.0], [18300.0, 3.0], [17700.0, 6.0], [18500.0, 6.0], [18800.0, 3.0], [18900.0, 5.0], [19100.0, 2.0], [19400.0, 16.0], [19300.0, 6.0], [19200.0, 2.0], [19000.0, 4.0], [18700.0, 3.0], [18600.0, 8.0], [20300.0, 20.0], [19700.0, 15.0], [20400.0, 16.0], [20200.0, 21.0], [20100.0, 21.0], [19800.0, 23.0], [19900.0, 29.0], [19600.0, 21.0], [19500.0, 13.0], [20000.0, 29.0], [21500.0, 2.0], [21000.0, 2.0], [21400.0, 2.0], [21200.0, 4.0], [21100.0, 4.0], [20800.0, 4.0], [20600.0, 16.0], [20500.0, 9.0], [20700.0, 6.0], [21300.0, 1.0], [20900.0, 3.0], [21700.0, 6.0], [22000.0, 3.0], [22300.0, 1.0], [22100.0, 3.0], [22500.0, 1.0], [22200.0, 10.0], [21900.0, 2.0], [21600.0, 2.0], [22600.0, 2.0], [23200.0, 2.0], [23300.0, 2.0], [22800.0, 2.0], [23700.0, 3.0], [24000.0, 2.0], [23900.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 24000.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 735.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 735.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 735.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 33.85826771653544, "minX": 1.6019025E12, "maxY": 40.0, "series": [{"data": [[1.6019025E12, 40.0], [1.6019028E12, 33.85826771653544], [1.60190268E12, 40.0], [1.60190274E12, 40.0], [1.60190256E12, 40.0], [1.60190262E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019028E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14463.0, "minX": 1.0, "maxY": 18658.0, "series": [{"data": [[33.0, 17937.0], [32.0, 17776.0], [2.0, 14505.0], [35.0, 17426.0], [34.0, 17403.0], [37.0, 16818.0], [36.0, 17159.0], [39.0, 17079.0], [38.0, 16945.0], [40.0, 17674.06034482758], [3.0, 14463.0], [4.0, 15073.0], [5.0, 15091.0], [6.0, 15370.0], [7.0, 16137.0], [8.0, 16085.0], [9.0, 16017.0], [10.0, 15541.0], [11.0, 15463.0], [12.0, 15395.0], [13.0, 16751.0], [14.0, 16714.0], [15.0, 17980.0], [16.0, 17990.0], [1.0, 14882.0], [17.0, 17976.0], [18.0, 17947.0], [19.0, 18309.0], [20.0, 18268.0], [21.0, 18220.0], [22.0, 18208.0], [23.0, 18539.0], [24.0, 18423.0], [25.0, 18419.0], [26.0, 18658.0], [27.0, 18645.0], [28.0, 18616.0], [29.0, 17839.0], [30.0, 18017.0], [31.0, 17738.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.93877551020409, 17642.13333333332]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 658.4333333333333, "minX": 1.6019025E12, "maxY": 363659.7166666667, "series": [{"data": [[1.6019025E12, 335968.51666666666], [1.6019028E12, 263901.75], [1.60190268E12, 363659.7166666667], [1.60190274E12, 284407.5833333333], [1.60190256E12, 291859.81666666665], [1.60190262E12, 295971.56666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6019025E12, 658.4333333333333], [1.6019028E12, 944.9], [1.60190268E12, 1000.1666666666666], [1.60190274E12, 907.6333333333333], [1.60190256E12, 878.0], [1.60190262E12, 1133.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019028E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 14193.597701149425, "minX": 1.6019025E12, "maxY": 21011.18965517242, "series": [{"data": [[1.6019025E12, 14193.597701149425], [1.6019028E12, 16329.275590551179], [1.60190268E12, 17446.646616541362], [1.60190274E12, 19791.383333333335], [1.60190256E12, 21011.18965517242], [1.60190262E12, 16616.046052631573]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019028E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 14191.793103448277, "minX": 1.6019025E12, "maxY": 21009.95689655172, "series": [{"data": [[1.6019025E12, 14191.793103448277], [1.6019028E12, 16328.244094488186], [1.60190268E12, 17445.375939849633], [1.60190274E12, 19790.16666666668], [1.60190256E12, 21009.95689655172], [1.60190262E12, 16615.125]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019028E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.11278195488721805, "minX": 1.6019025E12, "maxY": 8.827586206896555, "series": [{"data": [[1.6019025E12, 8.827586206896555], [1.6019028E12, 0.34645669291338593], [1.60190268E12, 0.11278195488721805], [1.60190274E12, 0.44999999999999973], [1.60190256E12, 0.5172413793103449], [1.60190262E12, 0.2894736842105263]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019028E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2619.0, "minX": 1.6019025E12, "maxY": 24084.0, "series": [{"data": [[1.6019025E12, 20465.0], [1.6019028E12, 19922.0], [1.60190268E12, 21735.0], [1.60190274E12, 20534.0], [1.60190256E12, 24084.0], [1.60190262E12, 20693.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6019025E12, 2619.0], [1.6019028E12, 12836.175996551514], [1.60190268E12, 12641.121990830898], [1.60190274E12, 18137.271998615266], [1.60190256E12, 19366.921997935773], [1.60190262E12, 13055.603998103143]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6019025E12, 2619.0], [1.6019028E12, 12849.193601379395], [1.60190268E12, 12675.73420366764], [1.60190274E12, 18142.499200553895], [1.60190256E12, 19374.714200825692], [1.60190262E12, 13062.764400758744]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6019025E12, 2619.0], [1.6019028E12, 12843.407998275758], [1.60190268E12, 12660.350995415449], [1.60190274E12, 18140.175999307634], [1.60190256E12, 19371.250998967887], [1.60190262E12, 13059.58199905157]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6019025E12, 2619.0], [1.6019028E12, 12819.0], [1.60190268E12, 12582.0], [1.60190274E12, 18133.0], [1.60190256E12, 19363.0], [1.60190262E12, 13036.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6019025E12, 15984.0], [1.6019028E12, 16367.0], [1.60190268E12, 17239.0], [1.60190274E12, 19949.5], [1.60190256E12, 20519.0], [1.60190262E12, 15858.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019028E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 14990.5, "minX": 1.0, "maxY": 19864.5, "series": [{"data": [[2.0, 19864.5], [1.0, 18657.5], [4.0, 15960.0], [5.0, 14990.5], [3.0, 16704.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 14990.5, "minX": 1.0, "maxY": 19863.5, "series": [{"data": [[2.0, 19863.5], [1.0, 18652.5], [4.0, 15960.0], [5.0, 14990.5], [3.0, 16704.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 5.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.6019025E12, "maxY": 2.533333333333333, "series": [{"data": [[1.6019025E12, 2.1166666666666667], [1.6019028E12, 1.45], [1.60190268E12, 2.216666666666667], [1.60190274E12, 2.0], [1.60190256E12, 1.9333333333333333], [1.60190262E12, 2.533333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019028E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.6019025E12, "maxY": 2.533333333333333, "series": [{"data": [[1.6019025E12, 1.45], [1.6019028E12, 2.1166666666666667], [1.60190268E12, 2.216666666666667], [1.60190274E12, 2.0], [1.60190256E12, 1.9333333333333333], [1.60190262E12, 2.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019028E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.6019025E12, "maxY": 2.533333333333333, "series": [{"data": [[1.6019025E12, 1.45], [1.6019028E12, 2.1166666666666667], [1.60190268E12, 2.216666666666667], [1.60190274E12, 2.0], [1.60190256E12, 1.9333333333333333], [1.60190262E12, 2.533333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019028E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.45, "minX": 1.6019025E12, "maxY": 2.533333333333333, "series": [{"data": [[1.6019025E12, 1.45], [1.6019028E12, 2.1166666666666667], [1.60190268E12, 2.216666666666667], [1.60190274E12, 2.0], [1.60190256E12, 1.9333333333333333], [1.60190262E12, 2.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019028E12, "title": "Total Transactions Per Second"}},
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

