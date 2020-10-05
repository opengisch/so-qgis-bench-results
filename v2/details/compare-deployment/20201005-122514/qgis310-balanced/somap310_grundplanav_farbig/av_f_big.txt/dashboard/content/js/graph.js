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
        data: {"result": {"minY": 2551.0, "minX": 0.0, "maxY": 9595.0, "series": [{"data": [[0.0, 2551.0], [0.1, 2551.0], [0.2, 2790.0], [0.3, 2849.0], [0.4, 2849.0], [0.5, 2929.0], [0.6, 2949.0], [0.7, 3127.0], [0.8, 3127.0], [0.9, 3192.0], [1.0, 3208.0], [1.1, 3214.0], [1.2, 3214.0], [1.3, 3238.0], [1.4, 3256.0], [1.5, 3258.0], [1.6, 3258.0], [1.7, 3297.0], [1.8, 3387.0], [1.9, 3387.0], [2.0, 3550.0], [2.1, 3576.0], [2.2, 3634.0], [2.3, 3634.0], [2.4, 3653.0], [2.5, 3656.0], [2.6, 3656.0], [2.7, 3656.0], [2.8, 3669.0], [2.9, 3751.0], [3.0, 3784.0], [3.1, 3784.0], [3.2, 3793.0], [3.3, 3869.0], [3.4, 3869.0], [3.5, 3908.0], [3.6, 3913.0], [3.7, 3927.0], [3.8, 3927.0], [3.9, 3946.0], [4.0, 3952.0], [4.1, 3960.0], [4.2, 3960.0], [4.3, 3991.0], [4.4, 4007.0], [4.5, 4019.0], [4.6, 4019.0], [4.7, 4023.0], [4.8, 4080.0], [4.9, 4102.0], [5.0, 4102.0], [5.1, 4131.0], [5.2, 4147.0], [5.3, 4147.0], [5.4, 4150.0], [5.5, 4194.0], [5.6, 4207.0], [5.7, 4207.0], [5.8, 4225.0], [5.9, 4244.0], [6.0, 4254.0], [6.1, 4254.0], [6.2, 4275.0], [6.3, 4279.0], [6.4, 4290.0], [6.5, 4290.0], [6.6, 4293.0], [6.7, 4336.0], [6.8, 4336.0], [6.9, 4344.0], [7.0, 4353.0], [7.1, 4358.0], [7.2, 4358.0], [7.3, 4372.0], [7.4, 4395.0], [7.5, 4403.0], [7.6, 4403.0], [7.7, 4434.0], [7.8, 4458.0], [7.9, 4463.0], [8.0, 4463.0], [8.1, 4463.0], [8.2, 4474.0], [8.3, 4482.0], [8.4, 4482.0], [8.5, 4484.0], [8.6, 4486.0], [8.7, 4486.0], [8.8, 4488.0], [8.9, 4488.0], [9.0, 4491.0], [9.1, 4491.0], [9.2, 4494.0], [9.3, 4501.0], [9.4, 4503.0], [9.5, 4503.0], [9.6, 4507.0], [9.7, 4508.0], [9.8, 4510.0], [9.9, 4510.0], [10.0, 4515.0], [10.1, 4526.0], [10.2, 4526.0], [10.3, 4554.0], [10.4, 4561.0], [10.5, 4620.0], [10.6, 4620.0], [10.7, 4622.0], [10.8, 4623.0], [10.9, 4628.0], [11.0, 4628.0], [11.1, 4633.0], [11.2, 4633.0], [11.3, 4645.0], [11.4, 4645.0], [11.5, 4667.0], [11.6, 4675.0], [11.7, 4675.0], [11.8, 4682.0], [11.9, 4693.0], [12.0, 4694.0], [12.1, 4694.0], [12.2, 4697.0], [12.3, 4712.0], [12.4, 4719.0], [12.5, 4719.0], [12.6, 4720.0], [12.7, 4763.0], [12.8, 4768.0], [12.9, 4768.0], [13.0, 4779.0], [13.1, 4795.0], [13.2, 4803.0], [13.3, 4803.0], [13.4, 4808.0], [13.5, 4809.0], [13.6, 4809.0], [13.7, 4812.0], [13.8, 4813.0], [13.9, 4817.0], [14.0, 4817.0], [14.1, 4818.0], [14.2, 4821.0], [14.3, 4822.0], [14.4, 4822.0], [14.5, 4824.0], [14.6, 4843.0], [14.7, 4846.0], [14.8, 4846.0], [14.9, 4848.0], [15.0, 4851.0], [15.1, 4851.0], [15.2, 4852.0], [15.3, 4855.0], [15.4, 4862.0], [15.5, 4862.0], [15.6, 4871.0], [15.7, 4887.0], [15.8, 4900.0], [15.9, 4900.0], [16.0, 4901.0], [16.1, 4915.0], [16.2, 4932.0], [16.3, 4932.0], [16.4, 4937.0], [16.5, 4945.0], [16.6, 4947.0], [16.7, 4947.0], [16.8, 4948.0], [16.9, 4973.0], [17.0, 4973.0], [17.1, 4988.0], [17.2, 5003.0], [17.3, 5005.0], [17.4, 5005.0], [17.5, 5019.0], [17.6, 5020.0], [17.7, 5026.0], [17.8, 5026.0], [17.9, 5044.0], [18.0, 5047.0], [18.1, 5048.0], [18.2, 5048.0], [18.3, 5062.0], [18.4, 5066.0], [18.5, 5066.0], [18.6, 5072.0], [18.7, 5104.0], [18.8, 5106.0], [18.9, 5106.0], [19.0, 5118.0], [19.1, 5123.0], [19.2, 5133.0], [19.3, 5133.0], [19.4, 5146.0], [19.5, 5149.0], [19.6, 5167.0], [19.7, 5167.0], [19.8, 5208.0], [19.9, 5217.0], [20.0, 5224.0], [20.1, 5224.0], [20.2, 5232.0], [20.3, 5233.0], [20.4, 5233.0], [20.5, 5233.0], [20.6, 5249.0], [20.7, 5271.0], [20.8, 5271.0], [20.9, 5273.0], [21.0, 5287.0], [21.1, 5293.0], [21.2, 5293.0], [21.3, 5302.0], [21.4, 5305.0], [21.5, 5309.0], [21.6, 5309.0], [21.7, 5314.0], [21.8, 5314.0], [21.9, 5314.0], [22.0, 5331.0], [22.1, 5343.0], [22.2, 5344.0], [22.3, 5344.0], [22.4, 5371.0], [22.5, 5372.0], [22.6, 5384.0], [22.7, 5384.0], [22.8, 5388.0], [22.9, 5401.0], [23.0, 5413.0], [23.1, 5413.0], [23.2, 5436.0], [23.3, 5445.0], [23.4, 5445.0], [23.5, 5448.0], [23.6, 5453.0], [23.7, 5456.0], [23.8, 5456.0], [23.9, 5465.0], [24.0, 5472.0], [24.1, 5472.0], [24.2, 5472.0], [24.3, 5477.0], [24.4, 5481.0], [24.5, 5483.0], [24.6, 5483.0], [24.7, 5539.0], [24.8, 5541.0], [24.9, 5547.0], [25.0, 5547.0], [25.1, 5552.0], [25.2, 5554.0], [25.3, 5554.0], [25.4, 5568.0], [25.5, 5577.0], [25.6, 5577.0], [25.7, 5577.0], [25.8, 5595.0], [25.9, 5599.0], [26.0, 5603.0], [26.1, 5603.0], [26.2, 5605.0], [26.3, 5606.0], [26.4, 5607.0], [26.5, 5607.0], [26.6, 5633.0], [26.7, 5634.0], [26.8, 5634.0], [26.9, 5640.0], [27.0, 5651.0], [27.1, 5661.0], [27.2, 5661.0], [27.3, 5667.0], [27.4, 5670.0], [27.5, 5672.0], [27.6, 5672.0], [27.7, 5672.0], [27.8, 5683.0], [27.9, 5687.0], [28.0, 5687.0], [28.1, 5701.0], [28.2, 5705.0], [28.3, 5719.0], [28.4, 5719.0], [28.5, 5748.0], [28.6, 5765.0], [28.7, 5765.0], [28.8, 5768.0], [28.9, 5770.0], [29.0, 5775.0], [29.1, 5775.0], [29.2, 5808.0], [29.3, 5815.0], [29.4, 5820.0], [29.5, 5820.0], [29.6, 5832.0], [29.7, 5856.0], [29.8, 5867.0], [29.9, 5867.0], [30.0, 5871.0], [30.1, 5891.0], [30.2, 5891.0], [30.3, 5902.0], [30.4, 5915.0], [30.5, 5927.0], [30.6, 5927.0], [30.7, 5945.0], [30.8, 5987.0], [30.9, 5988.0], [31.0, 5988.0], [31.1, 5989.0], [31.2, 6050.0], [31.3, 6057.0], [31.4, 6057.0], [31.5, 6061.0], [31.6, 6118.0], [31.7, 6118.0], [31.8, 6147.0], [31.9, 6152.0], [32.0, 6157.0], [32.1, 6157.0], [32.2, 6161.0], [32.3, 6161.0], [32.4, 6167.0], [32.5, 6167.0], [32.6, 6168.0], [32.7, 6175.0], [32.8, 6191.0], [32.9, 6191.0], [33.0, 6194.0], [33.1, 6196.0], [33.2, 6201.0], [33.3, 6201.0], [33.4, 6212.0], [33.5, 6222.0], [33.6, 6222.0], [33.7, 6222.0], [33.8, 6233.0], [33.9, 6235.0], [34.0, 6235.0], [34.1, 6247.0], [34.2, 6248.0], [34.3, 6259.0], [34.4, 6259.0], [34.5, 6260.0], [34.6, 6262.0], [34.7, 6302.0], [34.8, 6302.0], [34.9, 6311.0], [35.0, 6317.0], [35.1, 6317.0], [35.2, 6329.0], [35.3, 6332.0], [35.4, 6344.0], [35.5, 6344.0], [35.6, 6368.0], [35.7, 6374.0], [35.8, 6388.0], [35.9, 6388.0], [36.0, 6390.0], [36.1, 6404.0], [36.2, 6411.0], [36.3, 6411.0], [36.4, 6413.0], [36.5, 6421.0], [36.6, 6422.0], [36.7, 6422.0], [36.8, 6436.0], [36.9, 6442.0], [37.0, 6442.0], [37.1, 6442.0], [37.2, 6447.0], [37.3, 6454.0], [37.4, 6454.0], [37.5, 6456.0], [37.6, 6465.0], [37.7, 6480.0], [37.8, 6480.0], [37.9, 6529.0], [38.0, 6533.0], [38.1, 6539.0], [38.2, 6539.0], [38.3, 6547.0], [38.4, 6557.0], [38.5, 6557.0], [38.6, 6559.0], [38.7, 6573.0], [38.8, 6574.0], [38.9, 6574.0], [39.0, 6576.0], [39.1, 6580.0], [39.2, 6584.0], [39.3, 6584.0], [39.4, 6589.0], [39.5, 6596.0], [39.6, 6600.0], [39.7, 6600.0], [39.8, 6601.0], [39.9, 6613.0], [40.0, 6620.0], [40.1, 6620.0], [40.2, 6625.0], [40.3, 6627.0], [40.4, 6627.0], [40.5, 6630.0], [40.6, 6633.0], [40.7, 6641.0], [40.8, 6641.0], [40.9, 6666.0], [41.0, 6676.0], [41.1, 6685.0], [41.2, 6685.0], [41.3, 6690.0], [41.4, 6694.0], [41.5, 6714.0], [41.6, 6714.0], [41.7, 6714.0], [41.8, 6720.0], [41.9, 6720.0], [42.0, 6727.0], [42.1, 6733.0], [42.2, 6742.0], [42.3, 6742.0], [42.4, 6743.0], [42.5, 6747.0], [42.6, 6758.0], [42.7, 6758.0], [42.8, 6766.0], [42.9, 6791.0], [43.0, 6795.0], [43.1, 6795.0], [43.2, 6803.0], [43.3, 6812.0], [43.4, 6812.0], [43.5, 6818.0], [43.6, 6818.0], [43.7, 6832.0], [43.8, 6832.0], [43.9, 6833.0], [44.0, 6849.0], [44.1, 6851.0], [44.2, 6851.0], [44.3, 6855.0], [44.4, 6856.0], [44.5, 6864.0], [44.6, 6864.0], [44.7, 6872.0], [44.8, 6879.0], [44.9, 6886.0], [45.0, 6886.0], [45.1, 6887.0], [45.2, 6899.0], [45.3, 6899.0], [45.4, 6905.0], [45.5, 6908.0], [45.6, 6912.0], [45.7, 6912.0], [45.8, 6917.0], [45.9, 6918.0], [46.0, 6922.0], [46.1, 6922.0], [46.2, 6927.0], [46.3, 6928.0], [46.4, 6929.0], [46.5, 6929.0], [46.6, 6935.0], [46.7, 6936.0], [46.8, 6936.0], [46.9, 6938.0], [47.0, 6943.0], [47.1, 6944.0], [47.2, 6944.0], [47.3, 6945.0], [47.4, 6948.0], [47.5, 6949.0], [47.6, 6949.0], [47.7, 6953.0], [47.8, 6960.0], [47.9, 6964.0], [48.0, 6964.0], [48.1, 6967.0], [48.2, 6970.0], [48.3, 6978.0], [48.4, 6978.0], [48.5, 6980.0], [48.6, 6984.0], [48.7, 6984.0], [48.8, 6993.0], [48.9, 6999.0], [49.0, 7009.0], [49.1, 7009.0], [49.2, 7024.0], [49.3, 7036.0], [49.4, 7036.0], [49.5, 7036.0], [49.6, 7045.0], [49.7, 7054.0], [49.8, 7055.0], [49.9, 7055.0], [50.0, 7056.0], [50.1, 7058.0], [50.2, 7058.0], [50.3, 7063.0], [50.4, 7065.0], [50.5, 7066.0], [50.6, 7066.0], [50.7, 7066.0], [50.8, 7066.0], [50.9, 7075.0], [51.0, 7075.0], [51.1, 7079.0], [51.2, 7084.0], [51.3, 7089.0], [51.4, 7089.0], [51.5, 7090.0], [51.6, 7092.0], [51.7, 7092.0], [51.8, 7097.0], [51.9, 7102.0], [52.0, 7105.0], [52.1, 7105.0], [52.2, 7111.0], [52.3, 7111.0], [52.4, 7115.0], [52.5, 7115.0], [52.6, 7119.0], [52.7, 7120.0], [52.8, 7123.0], [52.9, 7123.0], [53.0, 7129.0], [53.1, 7131.0], [53.2, 7136.0], [53.3, 7136.0], [53.4, 7146.0], [53.5, 7159.0], [53.6, 7159.0], [53.7, 7161.0], [53.8, 7168.0], [53.9, 7168.0], [54.0, 7168.0], [54.1, 7174.0], [54.2, 7181.0], [54.3, 7198.0], [54.4, 7198.0], [54.5, 7208.0], [54.6, 7208.0], [54.7, 7220.0], [54.8, 7220.0], [54.9, 7228.0], [55.0, 7236.0], [55.1, 7236.0], [55.2, 7244.0], [55.3, 7259.0], [55.4, 7274.0], [55.5, 7274.0], [55.6, 7283.0], [55.7, 7286.0], [55.8, 7304.0], [55.9, 7304.0], [56.0, 7307.0], [56.1, 7310.0], [56.2, 7310.0], [56.3, 7310.0], [56.4, 7312.0], [56.5, 7315.0], [56.6, 7317.0], [56.7, 7317.0], [56.8, 7317.0], [56.9, 7319.0], [57.0, 7319.0], [57.1, 7325.0], [57.2, 7336.0], [57.3, 7337.0], [57.4, 7337.0], [57.5, 7347.0], [57.6, 7350.0], [57.7, 7353.0], [57.8, 7353.0], [57.9, 7356.0], [58.0, 7363.0], [58.1, 7365.0], [58.2, 7365.0], [58.3, 7369.0], [58.4, 7370.0], [58.5, 7370.0], [58.6, 7371.0], [58.7, 7377.0], [58.8, 7382.0], [58.9, 7382.0], [59.0, 7385.0], [59.1, 7386.0], [59.2, 7387.0], [59.3, 7387.0], [59.4, 7393.0], [59.5, 7398.0], [59.6, 7401.0], [59.7, 7401.0], [59.8, 7402.0], [59.9, 7408.0], [60.0, 7421.0], [60.1, 7421.0], [60.2, 7431.0], [60.3, 7433.0], [60.4, 7433.0], [60.5, 7441.0], [60.6, 7444.0], [60.7, 7446.0], [60.8, 7446.0], [60.9, 7447.0], [61.0, 7453.0], [61.1, 7456.0], [61.2, 7456.0], [61.3, 7457.0], [61.4, 7460.0], [61.5, 7464.0], [61.6, 7464.0], [61.7, 7469.0], [61.8, 7471.0], [61.9, 7471.0], [62.0, 7477.0], [62.1, 7477.0], [62.2, 7483.0], [62.3, 7483.0], [62.4, 7491.0], [62.5, 7493.0], [62.6, 7509.0], [62.7, 7509.0], [62.8, 7520.0], [62.9, 7532.0], [63.0, 7535.0], [63.1, 7535.0], [63.2, 7536.0], [63.3, 7537.0], [63.4, 7537.0], [63.5, 7541.0], [63.6, 7541.0], [63.7, 7544.0], [63.8, 7544.0], [63.9, 7552.0], [64.0, 7552.0], [64.1, 7567.0], [64.2, 7567.0], [64.3, 7578.0], [64.4, 7579.0], [64.5, 7583.0], [64.6, 7583.0], [64.7, 7583.0], [64.8, 7585.0], [64.9, 7588.0], [65.0, 7588.0], [65.1, 7592.0], [65.2, 7594.0], [65.3, 7594.0], [65.4, 7598.0], [65.5, 7604.0], [65.6, 7604.0], [65.7, 7604.0], [65.8, 7605.0], [65.9, 7606.0], [66.0, 7607.0], [66.1, 7607.0], [66.2, 7612.0], [66.3, 7615.0], [66.4, 7627.0], [66.5, 7627.0], [66.6, 7632.0], [66.7, 7636.0], [66.8, 7636.0], [66.9, 7639.0], [67.0, 7643.0], [67.1, 7644.0], [67.2, 7644.0], [67.3, 7644.0], [67.4, 7648.0], [67.5, 7650.0], [67.6, 7650.0], [67.7, 7650.0], [67.8, 7657.0], [67.9, 7662.0], [68.0, 7662.0], [68.1, 7667.0], [68.2, 7670.0], [68.3, 7687.0], [68.4, 7687.0], [68.5, 7687.0], [68.6, 7695.0], [68.7, 7695.0], [68.8, 7696.0], [68.9, 7696.0], [69.0, 7697.0], [69.1, 7697.0], [69.2, 7704.0], [69.3, 7705.0], [69.4, 7722.0], [69.5, 7722.0], [69.6, 7723.0], [69.7, 7723.0], [69.8, 7727.0], [69.9, 7727.0], [70.0, 7732.0], [70.1, 7733.0], [70.2, 7733.0], [70.3, 7736.0], [70.4, 7737.0], [70.5, 7749.0], [70.6, 7749.0], [70.7, 7754.0], [70.8, 7756.0], [70.9, 7759.0], [71.0, 7759.0], [71.1, 7765.0], [71.2, 7783.0], [71.3, 7783.0], [71.4, 7783.0], [71.5, 7786.0], [71.6, 7790.0], [71.7, 7790.0], [71.8, 7793.0], [71.9, 7795.0], [72.0, 7808.0], [72.1, 7808.0], [72.2, 7810.0], [72.3, 7813.0], [72.4, 7825.0], [72.5, 7825.0], [72.6, 7826.0], [72.7, 7826.0], [72.8, 7828.0], [72.9, 7828.0], [73.0, 7840.0], [73.1, 7851.0], [73.2, 7852.0], [73.3, 7852.0], [73.4, 7854.0], [73.5, 7854.0], [73.6, 7854.0], [73.7, 7862.0], [73.8, 7863.0], [73.9, 7864.0], [74.0, 7864.0], [74.1, 7865.0], [74.2, 7866.0], [74.3, 7867.0], [74.4, 7867.0], [74.5, 7874.0], [74.6, 7887.0], [74.7, 7891.0], [74.8, 7891.0], [74.9, 7891.0], [75.0, 7895.0], [75.1, 7895.0], [75.2, 7897.0], [75.3, 7898.0], [75.4, 7898.0], [75.5, 7898.0], [75.6, 7908.0], [75.7, 7910.0], [75.8, 7913.0], [75.9, 7913.0], [76.0, 7915.0], [76.1, 7916.0], [76.2, 7917.0], [76.3, 7917.0], [76.4, 7918.0], [76.5, 7924.0], [76.6, 7924.0], [76.7, 7924.0], [76.8, 7925.0], [76.9, 7934.0], [77.0, 7934.0], [77.1, 7938.0], [77.2, 7942.0], [77.3, 7942.0], [77.4, 7942.0], [77.5, 7944.0], [77.6, 7945.0], [77.7, 7958.0], [77.8, 7958.0], [77.9, 7961.0], [78.0, 7963.0], [78.1, 7966.0], [78.2, 7966.0], [78.3, 7966.0], [78.4, 7969.0], [78.5, 7969.0], [78.6, 7973.0], [78.7, 7974.0], [78.8, 7975.0], [78.9, 7975.0], [79.0, 7976.0], [79.1, 7976.0], [79.2, 7985.0], [79.3, 7985.0], [79.4, 7988.0], [79.5, 7988.0], [79.6, 7990.0], [79.7, 7990.0], [79.8, 7992.0], [79.9, 7999.0], [80.0, 8005.0], [80.1, 8005.0], [80.2, 8008.0], [80.3, 8015.0], [80.4, 8015.0], [80.5, 8015.0], [80.6, 8020.0], [80.7, 8020.0], [80.8, 8020.0], [80.9, 8023.0], [81.0, 8025.0], [81.1, 8029.0], [81.2, 8029.0], [81.3, 8042.0], [81.4, 8047.0], [81.5, 8049.0], [81.6, 8049.0], [81.7, 8052.0], [81.8, 8054.0], [81.9, 8054.0], [82.0, 8057.0], [82.1, 8059.0], [82.2, 8069.0], [82.3, 8069.0], [82.4, 8080.0], [82.5, 8081.0], [82.6, 8083.0], [82.7, 8083.0], [82.8, 8084.0], [82.9, 8084.0], [83.0, 8090.0], [83.1, 8090.0], [83.2, 8095.0], [83.3, 8096.0], [83.4, 8096.0], [83.5, 8096.0], [83.6, 8098.0], [83.7, 8103.0], [83.8, 8103.0], [83.9, 8106.0], [84.0, 8113.0], [84.1, 8122.0], [84.2, 8122.0], [84.3, 8139.0], [84.4, 8139.0], [84.5, 8139.0], [84.6, 8139.0], [84.7, 8144.0], [84.8, 8145.0], [84.9, 8147.0], [85.0, 8147.0], [85.1, 8149.0], [85.2, 8156.0], [85.3, 8156.0], [85.4, 8169.0], [85.5, 8178.0], [85.6, 8207.0], [85.7, 8207.0], [85.8, 8213.0], [85.9, 8214.0], [86.0, 8218.0], [86.1, 8218.0], [86.2, 8221.0], [86.3, 8226.0], [86.4, 8229.0], [86.5, 8229.0], [86.6, 8232.0], [86.7, 8237.0], [86.8, 8237.0], [86.9, 8243.0], [87.0, 8258.0], [87.1, 8258.0], [87.2, 8258.0], [87.3, 8280.0], [87.4, 8281.0], [87.5, 8290.0], [87.6, 8290.0], [87.7, 8293.0], [87.8, 8305.0], [87.9, 8319.0], [88.0, 8319.0], [88.1, 8341.0], [88.2, 8342.0], [88.3, 8359.0], [88.4, 8359.0], [88.5, 8361.0], [88.6, 8372.0], [88.7, 8372.0], [88.8, 8376.0], [88.9, 8380.0], [89.0, 8383.0], [89.1, 8383.0], [89.2, 8383.0], [89.3, 8385.0], [89.4, 8397.0], [89.5, 8397.0], [89.6, 8404.0], [89.7, 8407.0], [89.8, 8415.0], [89.9, 8415.0], [90.0, 8417.0], [90.1, 8421.0], [90.2, 8421.0], [90.3, 8424.0], [90.4, 8434.0], [90.5, 8443.0], [90.6, 8443.0], [90.7, 8454.0], [90.8, 8456.0], [90.9, 8457.0], [91.0, 8457.0], [91.1, 8470.0], [91.2, 8495.0], [91.3, 8518.0], [91.4, 8518.0], [91.5, 8527.0], [91.6, 8529.0], [91.7, 8529.0], [91.8, 8534.0], [91.9, 8541.0], [92.0, 8548.0], [92.1, 8548.0], [92.2, 8550.0], [92.3, 8551.0], [92.4, 8552.0], [92.5, 8552.0], [92.6, 8561.0], [92.7, 8574.0], [92.8, 8578.0], [92.9, 8578.0], [93.0, 8583.0], [93.1, 8585.0], [93.2, 8587.0], [93.3, 8587.0], [93.4, 8595.0], [93.5, 8601.0], [93.6, 8601.0], [93.7, 8609.0], [93.8, 8611.0], [93.9, 8613.0], [94.0, 8613.0], [94.1, 8618.0], [94.2, 8619.0], [94.3, 8626.0], [94.4, 8626.0], [94.5, 8627.0], [94.6, 8649.0], [94.7, 8656.0], [94.8, 8656.0], [94.9, 8656.0], [95.0, 8659.0], [95.1, 8659.0], [95.2, 8659.0], [95.3, 8661.0], [95.4, 8669.0], [95.5, 8669.0], [95.6, 8673.0], [95.7, 8676.0], [95.8, 8683.0], [95.9, 8683.0], [96.0, 8691.0], [96.1, 8712.0], [96.2, 8718.0], [96.3, 8718.0], [96.4, 8721.0], [96.5, 8741.0], [96.6, 8746.0], [96.7, 8746.0], [96.8, 8750.0], [96.9, 8755.0], [97.0, 8755.0], [97.1, 8765.0], [97.2, 8774.0], [97.3, 8781.0], [97.4, 8781.0], [97.5, 8807.0], [97.6, 8827.0], [97.7, 8828.0], [97.8, 8828.0], [97.9, 8836.0], [98.0, 8839.0], [98.1, 8840.0], [98.2, 8840.0], [98.3, 8845.0], [98.4, 8868.0], [98.5, 8868.0], [98.6, 8884.0], [98.7, 9010.0], [98.8, 9085.0], [98.9, 9085.0], [99.0, 9158.0], [99.1, 9177.0], [99.2, 9251.0], [99.3, 9251.0], [99.4, 9329.0], [99.5, 9366.0], [99.6, 9481.0], [99.7, 9481.0], [99.8, 9497.0], [99.9, 9595.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 2500.0, "maxY": 33.0, "series": [{"data": [[2500.0, 1.0], [2700.0, 1.0], [2800.0, 1.0], [2900.0, 2.0], [3100.0, 2.0], [3200.0, 6.0], [3300.0, 1.0], [3500.0, 2.0], [3600.0, 5.0], [3700.0, 3.0], [3800.0, 1.0], [3900.0, 7.0], [4000.0, 4.0], [4100.0, 5.0], [4200.0, 8.0], [4300.0, 6.0], [4400.0, 13.0], [4600.0, 13.0], [4500.0, 9.0], [4800.0, 19.0], [4700.0, 7.0], [5100.0, 8.0], [5000.0, 11.0], [4900.0, 10.0], [5300.0, 12.0], [5200.0, 11.0], [5400.0, 13.0], [5600.0, 15.0], [5500.0, 10.0], [5800.0, 8.0], [5700.0, 8.0], [5900.0, 7.0], [6000.0, 3.0], [6100.0, 12.0], [6200.0, 11.0], [6300.0, 10.0], [6600.0, 14.0], [6400.0, 13.0], [6500.0, 13.0], [6800.0, 16.0], [6900.0, 27.0], [6700.0, 12.0], [7000.0, 21.0], [7100.0, 19.0], [7400.0, 22.0], [7200.0, 10.0], [7300.0, 28.0], [7600.0, 27.0], [7500.0, 21.0], [7800.0, 26.0], [7900.0, 33.0], [7700.0, 21.0], [8100.0, 14.0], [8000.0, 27.0], [8500.0, 16.0], [8600.0, 19.0], [8300.0, 13.0], [8700.0, 10.0], [8200.0, 16.0], [8400.0, 13.0], [9000.0, 2.0], [8800.0, 9.0], [9100.0, 2.0], [9200.0, 1.0], [9300.0, 2.0], [9400.0, 2.0], [9500.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 37.36486486486488, "minX": 1.60190568E12, "maxY": 40.0, "series": [{"data": [[1.6019058E12, 37.36486486486488], [1.60190574E12, 40.0], [1.60190568E12, 40.0]], "isOverall": false, "label": "JMeter Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019058E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 4508.0, "minX": 1.0, "maxY": 9329.0, "series": [{"data": [[33.0, 5273.0], [32.0, 8618.0], [2.0, 6953.0], [35.0, 5314.0], [34.0, 6233.0], [37.0, 5305.0], [36.0, 6260.0], [39.0, 7783.0], [38.0, 5672.0], [40.0, 6715.27011494253], [3.0, 6050.0], [4.0, 6938.0], [5.0, 6922.0], [6.0, 7090.0], [7.0, 6929.0], [8.0, 7431.0], [9.0, 7421.0], [10.0, 8417.0], [11.0, 6404.0], [12.0, 8750.0], [13.0, 6317.0], [14.0, 8828.0], [15.0, 7696.0], [16.0, 7733.0], [1.0, 6613.0], [17.0, 4508.0], [18.0, 4510.0], [19.0, 8884.0], [20.0, 4554.0], [21.0, 9158.0], [22.0, 7286.0], [23.0, 4973.0], [24.0, 9251.0], [25.0, 4900.0], [26.0, 9329.0], [27.0, 4843.0], [28.0, 6795.0], [29.0, 4821.0], [30.0, 4809.0], [31.0, 4813.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[38.93877551020409, 6713.213605442177]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 40.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 582.8666666666667, "minX": 1.60190568E12, "maxY": 856876.3166666667, "series": [{"data": [[1.6019058E12, 667451.2333333333], [1.60190574E12, 856876.3166666667], [1.60190568E12, 311453.13333333336]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6019058E12, 2223.95], [1.60190574E12, 2716.2166666666667], [1.60190568E12, 582.8666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019058E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 5578.285714285715, "minX": 1.60190568E12, "maxY": 7095.625, "series": [{"data": [[1.6019058E12, 7095.625], [1.60190574E12, 6641.9309392265195], [1.60190568E12, 5578.285714285715]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019058E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 5576.324675324675, "minX": 1.60190568E12, "maxY": 7094.560810810813, "series": [{"data": [[1.6019058E12, 7094.560810810813], [1.60190574E12, 6640.798342541434], [1.60190568E12, 5576.324675324675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019058E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0033783783783783803, "minX": 1.60190568E12, "maxY": 7.454545454545459, "series": [{"data": [[1.6019058E12, 0.0033783783783783803], [1.60190574E12, 0.12154696132596687], [1.60190568E12, 7.454545454545459]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019058E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 2551.0, "minX": 1.60190568E12, "maxY": 9595.0, "series": [{"data": [[1.6019058E12, 9329.0], [1.60190574E12, 9497.0], [1.60190568E12, 9595.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6019058E12, 4461.364999645948], [1.60190574E12, 3220.4079979228973], [1.60190568E12, 2551.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6019058E12, 4462.70150014162], [1.60190574E12, 3228.248800830841], [1.60190568E12, 2551.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6019058E12, 4462.107499822974], [1.60190574E12, 3224.7639989614486], [1.60190568E12, 2551.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6019058E12, 4358.0], [1.60190574E12, 3192.0], [1.60190568E12, 2551.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6019058E12, 7331.0], [1.60190574E12, 7050.0], [1.60190568E12, 5232.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019058E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 4971.0, "minX": 1.0, "maxY": 7573.0, "series": [{"data": [[8.0, 6179.0], [4.0, 7573.0], [1.0, 6613.0], [9.0, 5607.0], [5.0, 7432.0], [10.0, 4971.0], [11.0, 5539.0], [3.0, 5577.0], [6.0, 7538.5], [7.0, 5344.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 4971.0, "minX": 1.0, "maxY": 7571.5, "series": [{"data": [[8.0, 6179.0], [4.0, 7571.5], [1.0, 6613.0], [9.0, 5607.0], [5.0, 7430.5], [10.0, 4971.0], [11.0, 5539.0], [3.0, 5576.0], [6.0, 7537.5], [7.0, 5341.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 11.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.95, "minX": 1.60190568E12, "maxY": 6.033333333333333, "series": [{"data": [[1.6019058E12, 4.266666666666667], [1.60190574E12, 6.033333333333333], [1.60190568E12, 1.95]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019058E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60190568E12, "maxY": 6.033333333333333, "series": [{"data": [[1.6019058E12, 4.933333333333334], [1.60190574E12, 6.033333333333333], [1.60190568E12, 1.2833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6019058E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60190568E12, "maxY": 6.033333333333333, "series": [{"data": [[1.6019058E12, 4.933333333333334], [1.60190574E12, 6.033333333333333], [1.60190568E12, 1.2833333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019058E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 1.2833333333333334, "minX": 1.60190568E12, "maxY": 6.033333333333333, "series": [{"data": [[1.6019058E12, 4.933333333333334], [1.60190574E12, 6.033333333333333], [1.60190568E12, 1.2833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6019058E12, "title": "Total Transactions Per Second"}},
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

