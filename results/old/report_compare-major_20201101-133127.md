# QGIS Benchmark summary compare-major (20201101-133127)


compare different version of QGIS servers using the same settings

_run completed in 00h 51m 48s_

_Sample size per configuration 11187_
## Summary plot
An interactive summary plot can be found [here](report_compare-major_20201101-133127_plot.html)

## Summary
| name    | group   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------|---------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 | Global  |                613.1 | +0.0%                        |         5867   | +0.0%                  |          1227   | +0.0%                   |           16 |        14862 |         11187 |            0 |    11576.5 |    7553.5  |     5016.8 |      98.9 |   72.7    |      12.7 |          0 |
| qgis218 | Global  |                738.3 | +20.4%                       |         7130.7 | +21.5%                 |          1387   | +13.0%                  |          440 |        29311 |         11187 |            0 |    11521.8 |    7756.97 |     4812.5 |      99.9 |   97.4333 |      13.6 |          0 |
| qgis310 | Global  |                829.2 | +35.2%                       |         8030.2 | +36.9%                 |          2032.5 | +65.6%                  |          390 |        14562 |         11187 |            0 |    11444   |    7592.53 |     5078.2 |      98   |   73.3333 |      12.9 |          0 |
| qgis314 | Global  |                845.6 | +37.9%                       |         8187.6 | +39.6%                 |          2059.5 | +67.8%                  |          424 |        15985 |         11187 |            0 |    11575.8 |    7610.9  |     4956.4 |      96.4 |   73.5333 |      13.5 |          0 |

## Aggregated
| name                                  | group                    |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   minResTime |   maxResTime |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |   errorPct |
|---------------------------------------|--------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|--------------|--------------|---------------|--------------|------------|------------|------------|-----------|-----------|-----------|------------|
| qgis316 > somap316_grundplanav_farbig | somap_grundplanav_farbig |                 62.1 | +0.0%                        |          556   | +0.0%                  |           547   | +0.0%                   |            7 |         3679 |           735 |            0 |     7649.6 |     6801.3 |     5334.1 |      93.6 |      73.1 |      34   |          0 |
| qgis218 > somap218_grundplanav_farbig | somap_grundplanav_farbig |                 70.3 | +13.2%                       |          633.2 | +13.9%                 |           663   | +21.2%                  |          218 |         8921 |           735 |            0 |     7014.7 |     6571.8 |     5983.2 |      99.4 |      96.5 |      34.2 |          0 |
| qgis310 > somap310_grundplanav_farbig | somap_grundplanav_farbig |                 85.2 | +37.2%                       |          784.1 | +41.0%                 |           974   | +78.1%                  |          175 |         3848 |           735 |            0 |     7838.2 |     6840.9 |     5295.1 |      98   |      73.7 |      46.8 |          0 |
| qgis314 > somap314_grundplanav_farbig | somap_grundplanav_farbig |                 86.3 | +39.0%                       |          788.8 | +41.9%                 |           983   | +79.7%                  |          195 |         4162 |           735 |            0 |     7565.8 |     6881.9 |     5359.6 |      96.4 |      73.9 |      49.3 |          0 |
| qgis316 > somap316_grundplanav_sw     | somap_grundplanav_sw     |                381.5 | +0.0%                        |         3716.7 | +0.0%                  |           547.5 | +0.0%                   |            6 |         6580 |          5190 |            0 |    11576.5 |     9616   |     6273   |      98.9 |      73.2 |      12.7 |          0 |
| qgis218 > somap218_grundplanav_sw     | somap_grundplanav_sw     |                519   | +36.0%                       |         5078.5 | +36.6%                 |           584   | +6.7%                   |          216 |        17156 |          5190 |            0 |    11521.8 |    10148.1 |     6383.9 |      99.9 |      98.2 |      13.6 |          0 |
| qgis310 > somap310_grundplanav_sw     | somap_grundplanav_sw     |                539.8 | +41.5%                       |         5304.1 | +42.7%                 |           861.5 | +57.4%                  |          184 |         6205 |          5190 |            0 |    11444   |     9729.8 |     6513.2 |      96.2 |      73.6 |      12.9 |          0 |
| qgis314 > somap314_grundplanav_sw     | somap_grundplanav_sw     |                555.3 | +45.6%                       |         5460.9 | +46.9%                 |           879.5 | +60.6%                  |          194 |         7262 |          5190 |            0 |    11575.8 |     9738.3 |     6559.8 |      96.4 |      74   |      32.3 |          0 |
| qgis218 > somap218_lk                 | somap_lk                 |                149   | +0.0%                        |         1419.1 | +0.0%                  |           140   | +5.7%                   |            6 |         3234 |          5262 |            0 |     8018.4 |     6551   |     4812.5 |      99.8 |      97.6 |      34.5 |          0 |
| qgis316 > somap316_lk                 | somap_lk                 |                169.5 | +13.8%                       |         1594.3 | +12.3%                 |           132.5 | +0.0%                   |            3 |         4603 |          5262 |            0 |     7697   |     6243.2 |     5016.8 |      91   |      71.8 |      21.4 |          0 |
| qgis314 > somap314_lk                 | somap_lk                 |                204   | +36.9%                       |         1937.9 | +36.6%                 |           197   | +48.7%                  |           35 |         4561 |          5262 |            0 |     7894.5 |     6212.5 |     4956.4 |      83.1 |      72.7 |      13.5 |          0 |
| qgis310 > somap310_lk                 | somap_lk                 |                204.2 | +37.0%                       |         1942   | +36.9%                 |           197   | +48.7%                  |           31 |         4509 |          5262 |            0 |     7460.3 |     6206.9 |     5078.2 |      92.8 |      72.7 |      13.1 |          0 |

## Detail
| name                                                                                                                                                                           | group                                   |   effective duration | effective duration penalty   |   totalResTime | totalResTime penalty   |   medianResTime | medianResTime penalty   |   sampleCount |   errorCount |   errorPct |   meanResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------|----------------------|------------------------------|----------------|------------------------|-----------------|-------------------------|---------------|--------------|------------|---------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis316 > somap316_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201101-133127/qgis316/somap316_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 62.1 | +0.0%                        |          556   | +0.0%                  |           547   | +0.0%                   |           735 |            0 |          0 |       756.419 |            7 |         3679 |        1514.8 |       1792.2  |       2899.8  |     13.0437  |                1908.67 |            5.74305 |     7649.6 |     6801.3 |     5334.1 |      93.6 |      73.1 |      34   |
| [qgis218 > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201101-133127/qgis218/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 70.3 | +13.2%                       |          633.2 | +13.9%                 |           663   | +21.2%                  |           735 |            0 |          0 |       861.509 |          218 |         8921 |        1515.2 |       1821    |       2789.64 |     11.3503  |                1986.6  |            4.99746 |     7014.7 |     6571.8 |     5983.2 |      99.4 |      96.5 |      34.2 |
| [qgis310 > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201101-133127/qgis310/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 85.2 | +37.2%                       |          784.1 | +41.0%                 |           974   | +78.1%                  |           735 |            0 |          0 |      1066.75  |          175 |         3848 |        1754.6 |       2005.2  |       3361.4  |      9.23738 |                1351.87 |            4.06715 |     7838.2 |     6840.9 |     5295.1 |      98   |      73.7 |      46.8 |
| [qgis314 > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201101-133127/qgis314/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) | somap_grundplanav_farbig > av_f_big.txt |                 86.3 | +39.0%                       |          788.8 | +41.9%                 |           983   | +79.7%                  |           735 |            0 |          0 |      1073.14  |          195 |         4162 |        1777.4 |       2018.2  |       3247.24 |      9.1427  |                1337.95 |            4.02547 |     7565.8 |     6881.9 |     5359.6 |      96.4 |      73.9 |      49.3 |
| [qgis316 > somap316_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201101-133127/qgis316/somap316_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                381.5 | +0.0%                        |         3716.7 | +0.0%                  |           547.5 | +0.0%                   |          5190 |            0 |          0 |       716.134 |            6 |         6580 |        1558.9 |       2013.45 |       3089.09 |     13.8292  |                3743.16 |            6.02299 |    11576.5 |     9616   |     6273   |      98.9 |      73.2 |      12.7 |
| [qgis218 > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201101-133127/qgis218/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                519   | +36.0%                       |         5078.5 | +36.6%                 |           584   | +6.7%                   |          5190 |            0 |          0 |       978.509 |          216 |        17156 |        2238   |       2707.7  |       5384.78 |     10.1191  |                3150.65 |            4.40717 |    11521.8 |    10148.1 |     6383.9 |      99.9 |      98.2 |      13.6 |
| [qgis310 > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201101-133127/qgis310/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                539.8 | +41.5%                       |         5304.1 | +42.7%                 |           861.5 | +57.4%                  |          5190 |            0 |          0 |      1021.98  |          184 |         6205 |        1846.7 |       2294    |       3342.36 |      9.72737 |                2632.64 |            4.23654 |    11444   |     9729.8 |     6513.2 |      96.2 |      73.6 |      12.9 |
| [qgis314 > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201101-133127/qgis314/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       | somap_grundplanav_sw > av_sw_big.txt    |                555.3 | +45.6%                       |         5460.9 | +46.9%                 |           879.5 | +60.6%                  |          5190 |            0 |          0 |      1052.19  |          194 |         7262 |        1928.8 |       2408.8  |       3436.18 |      9.45345 |                2558.43 |            4.11724 |    11575.8 |     9738.3 |     6559.8 |      96.4 |      74   |      32.3 |
| [qgis218 > somap218_lk > lk_big.txt](../results/details/compare-major/20201101-133127/qgis218/somap218_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                149   | +0.0%                        |         1419.1 | +0.0%                  |           140   | +5.7%                   |          5262 |            0 |          0 |       269.683 |            6 |         3234 |         733.7 |       1007.85 |       1767.11 |     36.7905  |                1873.04 |           18.6364  |     8018.4 |     6551   |     4812.5 |      99.8 |      97.6 |      34.5 |
| [qgis316 > somap316_lk > lk_big.txt](../results/details/compare-major/20201101-133127/qgis316/somap316_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                169.5 | +13.8%                       |         1594.3 | +12.3%                 |           132.5 | +0.0%                   |          5262 |            0 |          0 |       302.983 |            3 |         4603 |         802.7 |       1115    |       1945.7  |     32.2636  |                1526.63 |           16.3432  |     7697   |     6243.2 |     5016.8 |      91   |      71.8 |      21.4 |
| [qgis314 > somap314_lk > lk_big.txt](../results/details/compare-major/20201101-133127/qgis314/somap314_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                204   | +36.9%                       |         1937.9 | +36.6%                 |           197   | +48.7%                  |          5262 |            0 |          0 |       368.291 |           35 |         4561 |         902   |       1232    |       1925.55 |     26.6267  |                1259.77 |           13.4879  |     7894.5 |     6212.5 |     4956.4 |      83.1 |      72.7 |      13.5 |
| [qgis310 > somap310_lk > lk_big.txt](../results/details/compare-major/20201101-133127/qgis310/somap310_lk/lk_big.txt/dashboard/index.html)                                     | somap_lk > lk_big.txt                   |                204.2 | +37.0%                       |         1942   | +36.9%                 |           197   | +48.7%                  |          5262 |            0 |          0 |       369.064 |           31 |         4509 |         913.7 |       1211.55 |       1949.4  |     26.599   |                1259.08 |           13.4738  |     7460.3 |     6206.9 |     5078.2 |      92.8 |      72.7 |      13.1 |

### used global configuration

```
cpu-cores: 4
deploy-method: docker-swarm
logs-dir: /home/ubuntu/so-qgis-bench/logs/prepared
parallel-requests: 10
reports-dir: ./reports/
result-dir: /home/ubuntu/so-qgis-bench/results

```
### test configurations

```
description: 'compare different version of QGIS servers using the same settings'
test-cases:
  base:
    active: no
    compose-variables:
      QGIS_REPLICAS: '6'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_SERVER_MAX_THREADS: '1' #QGIS3
      QGIS_FCGI_PROCESSES: '1' #QGIS2
      PG_SERVICE: 'pg_service.conf'

  qgis218:
    active: yes
    inherit: base
    template: docker-compose-qgis-2
    path-prefix: 'ows'
    projects:
      somap218_lk:
        - lk_big.txt
      somap218_grundplanav_farbig:
        - av_f_big.txt
      somap218_grundplanav_sw:
        - av_sw_big.txt

  qgis310:
    active: yes
    inherit: base
    template: docker-compose-qgis-3-nginx
    path-prefix: 'ogc'
    compose-variables:
      QGIS_VERSION: '3.10'
    projects:
      somap310_lk:
        - lk_big.txt
      somap310_grundplanav_farbig:
        - av_f_big.txt
      somap310_grundplanav_sw:
        - av_sw_big.txt

  qgis314:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis316:
    active: yes
    inherit: qgis310
    compose-variables:
      QGIS_VERSION: '3.16'
    projects:
      somap316_lk:
        - lk_big.txt
      somap316_grundplanav_farbig:
        - av_f_big.txt
      somap316_grundplanav_sw:
        - av_sw_big.txt
```
### parsed test configurations

```
description: compare different version of QGIS servers using the same settings
test-cases:
  base:
    active: false
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
  qgis218:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
    inherit: base
    path-prefix: ows
    projects:
      somap218_grundplanav_farbig:
      - av_f_big.txt
      somap218_grundplanav_sw:
      - av_sw_big.txt
      somap218_lk:
      - lk_big.txt
    template: docker-compose-qgis-2
  qgis310:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.10'
    inherit: base
    path-prefix: ogc
    projects:
      somap310_grundplanav_farbig:
      - av_f_big.txt
      somap310_grundplanav_sw:
      - av_sw_big.txt
      somap310_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis314:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.14'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx
  qgis316:
    active: true
    compose-variables:
      PG_SERVICE: pg_service.conf
      QGIS_FCGI_PROCESSES: '1'
      QGIS_MAX_CACHE_LAYERS: '100'
      QGIS_REPLICAS: '6'
      QGIS_SERVER_CACHE_SIZE: '50'
      QGIS_SERVER_MAX_THREADS: '1'
      QGIS_SERVER_PARALLEL_RENDERING: '"true"'
      QGIS_VERSION: '3.16'
    inherit: qgis310
    path-prefix: ogc
    projects:
      somap316_grundplanav_farbig:
      - av_f_big.txt
      somap316_grundplanav_sw:
      - av_sw_big.txt
      somap316_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```