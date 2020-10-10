# QGIS Benchmark summary compare-major (20201010-101737)


compare different version of QGIS servers using the same settings

_run completed in 2559.7200000000003s_

## Summary
| name               |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis314-standalone |       141.62 |        0    |         11198 |        11198 |     2749.1 |    2476.77 |      94.1 |   64.2667 |     100    |
| qgis310-stock      |      7793.9  |     5403.39 |         11198 |            1 |     9052   |    5053.83 |      99   |   72.2333 |       0.01 |
| qgis218-stock      |      8026.62 |     5567.72 |         11198 |           11 |     9319.7 |    5056.43 |      99.9 |   91.1    |       0.1  |
| qgis314-stock      |      8041.81 |     5578.44 |         11198 |            1 |     9047.8 |    4941.07 |      96.1 |   72.5667 |       0.01 |

## Aggregated
| name                                             |   duration s |   penalty % |   sampleCount |   errorCount |   memMaxMB |   memAvgMB |   cpuMax% |   cpuAvg% |   errorPct |
|--------------------------------------------------|--------------|-------------|---------------|--------------|------------|------------|-----------|-----------|------------|
| qgis314-standalone > somap314_grundplanav_farbig |         8.89 |        0    |           735 |          735 |     2396.3 |     2396.3 |      32.8 |      32.8 |     100    |
| qgis314-standalone > somap314_lk                 |        65.9  |      641.28 |          5272 |         5272 |     2749.1 |     2520.2 |      91.7 |      78.9 |     100    |
| qgis314-standalone > somap314_grundplanav_sw     |        66.83 |      651.74 |          5191 |         5191 |     2687.3 |     2513.8 |      94.1 |      81.1 |     100    |
| qgis218-stock > somap218_grundplanav_farbig      |       630.4  |     6991.11 |           735 |            0 |     4058.6 |     3603.2 |      99.2 |      95.9 |       0    |
| qgis310-stock > somap310_grundplanav_farbig      |       745.76 |     8288.75 |           735 |            0 |     5119.7 |     4276.4 |      99   |      72.2 |       0    |
| qgis314-stock > somap314_grundplanav_farbig      |       778.88 |     8661.3  |           735 |            0 |     4944.8 |     4124.7 |      96.1 |      72.6 |       0    |
| qgis310-stock > somap310_lk                      |      1869.65 |    20930.9  |          5272 |            0 |     4827.5 |     3535.5 |      88.9 |      71.4 |       0    |
| qgis314-stock > somap314_lk                      |      1886.66 |    21122.3  |          5272 |            0 |     5626.5 |     3543.3 |      87.2 |      71.9 |       0    |
| qgis218-stock > somap218_lk                      |      2328.09 |    26087.7  |          5272 |           10 |     5121.2 |     4071.9 |      99.9 |      79.2 |       0.19 |
| qgis218-stock > somap218_grundplanav_sw          |      5068.13 |    56909.3  |          5191 |            1 |     9319.7 |     7494.2 |      99.9 |      98.2 |       0.02 |
| qgis310-stock > somap310_grundplanav_sw          |      5178.49 |    58150.7  |          5191 |            1 |     9052   |     7349.6 |      98.9 |      73.1 |       0.02 |
| qgis314-stock > somap314_grundplanav_sw          |      5376.27 |    60375.5  |          5191 |            1 |     9047.8 |     7155.2 |      93   |      73.2 |       0.02 |

## Detail
| name                                                                                                                                                                                                 |   duration s |   penalty % |   sampleCount |   errorCount |    errorPct |   meanResTime |   medianResTime |   minResTime |   maxResTime |   pct1ResTime |   pct2ResTime |   pct3ResTime |   throughput |   receivedKBytesPerSec |   sentKBytesPerSec |   memMaxMB |   memAvgMB |   memMinMB |   cpuMax% |   cpuAvg% |   cpuMin% |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------|-------------|---------------|--------------|-------------|---------------|-----------------|--------------|--------------|---------------|---------------|---------------|--------------|------------------------|--------------------|------------|------------|------------|-----------|-----------|-----------|
| [qgis314-standalone > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-101737/qgis314-standalone/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html) |         8.89 |        0    |           735 |          735 | 100         |       12.0966 |            10   |            6 |           64 |          19   |         23    |         31    |    584.726   |                153.034 |          257.45    |     2396.3 |     2396.3 |     2396.3 |      32.8 |      32.8 |      32.8 |
| [qgis314-standalone > somap314_lk > lk_big.txt](../results/details/compare-major/20201010-101737/qgis314-standalone/somap314_lk/lk_big.txt/dashboard/index.html)                                     |        65.9  |      641.28 |          5272 |         5272 | 100         |       12.5002 |            11   |            5 |           62 |          20   |         23    |         31    |    739.618   |                193.572 |          374.674   |     2749.1 |     2520.2 |     2335.7 |      91.7 |      78.9 |      15.7 |
| [qgis314-standalone > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-101737/qgis314-standalone/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)       |        66.83 |      651.74 |          5191 |         5191 | 100         |       12.8742 |            11   |            5 |           64 |          20   |         25    |         37    |    718.676   |                188.091 |          312.998   |     2687.3 |     2513.8 |     2382.5 |      94.1 |      81.1 |      34.7 |
| [qgis218-stock > somap218_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-101737/qgis218-stock/somap218_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       630.4  |     6991.11 |           735 |            0 |   0         |      857.693  |           648   |          216 |         9755 |        1462.2 |       1842.2  |       3161.08 |     11.4007  |               1995.37  |            5.01963 |     4058.6 |     3603.2 |     2849.7 |      99.2 |      95.9 |      33   |
| [qgis310-stock > somap310_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-101737/qgis310-stock/somap310_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       745.76 |     8288.75 |           735 |            0 |   0         |     1014.64   |           924   |          188 |         4429 |        1675.6 |       1961.4  |       3210.4  |      9.73252 |               1424.33  |            4.28516 |     5119.7 |     4276.4 |     2459.1 |      99   |      72.2 |      25   |
| [qgis314-stock > somap314_grundplanav_farbig > av_f_big.txt](../results/details/compare-major/20201010-101737/qgis314-stock/somap314_grundplanav_farbig/av_f_big.txt/dashboard/index.html)           |       778.88 |     8661.3  |           735 |            0 |   0         |     1059.69   |           958   |          198 |         4306 |        1756   |       1980.2  |       2796.52 |      9.31642 |               1363.36  |            4.10195 |     4944.8 |     4124.7 |     2665.9 |      96.1 |      72.6 |      25.3 |
| [qgis310-stock > somap310_lk > lk_big.txt](../results/details/compare-major/20201010-101737/qgis310-stock/somap310_lk/lk_big.txt/dashboard/index.html)                                               |      1869.65 |    20930.9  |          5272 |            0 |   0         |      354.638  |           193   |           27 |         3093 |         877   |       1155.35 |       1828.24 |     27.8248  |               1327.25  |           14.0954  |     4827.5 |     3535.5 |     2346   |      88.9 |      71.4 |      14.6 |
| [qgis314-stock > somap314_lk > lk_big.txt](../results/details/compare-major/20201010-101737/qgis314-stock/somap314_lk/lk_big.txt/dashboard/index.html)                                               |      1886.66 |    21122.3  |          5272 |            0 |   0         |      357.864  |           197.5 |           32 |         4333 |         847   |       1144.35 |       1933.81 |     27.5651  |               1314.19  |           13.9639  |     5626.5 |     3543.3 |     2362.2 |      87.2 |      71.9 |      14.7 |
| [qgis218-stock > somap218_lk > lk_big.txt](../results/details/compare-major/20201010-101737/qgis218-stock/somap218_lk/lk_big.txt/dashboard/index.html)                                               |      2328.09 |    26087.7  |          5272 |           10 |   0.189681  |      441.595  |           143   |            5 |        90108 |         735.7 |       1039.05 |       1994.7  |     17.7055  |                899.741 |            8.9692  |     5121.2 |     4071.9 |     2305   |      99.9 |      79.2 |      12.7 |
| [qgis218-stock > somap218_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-101737/qgis218-stock/somap218_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5068.13 |    56909.3  |          5191 |            1 |   0.0192641 |      976.33   |           567   |          207 |        90095 |        2191   |       2725    |       5294.32 |     10.1379  |               3155.66  |            4.41524 |     9319.7 |     7494.2 |     3439.7 |      99.9 |      98.2 |      13.2 |
| [qgis310-stock > somap310_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-101737/qgis310-stock/somap310_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5178.49 |    58150.7  |          5191 |            1 |   0.0192641 |      997.591  |           834   |          179 |         6224 |        1822   |       2281.2  |       3257.44 |      9.96374 |               2696.05  |            4.33941 |     9052   |     7349.6 |     3886.4 |      98.9 |      73.1 |      21.1 |
| [qgis314-stock > somap314_grundplanav_sw > av_sw_big.txt](../results/details/compare-major/20201010-101737/qgis314-stock/somap314_grundplanav_sw/av_sw_big.txt/dashboard/index.html)                 |      5376.27 |    60375.5  |          5191 |            1 |   0.0192641 |     1035.69   |           849   |          187 |         6705 |        1919   |       2364.8  |       3396.16 |      9.59331 |               2595.88  |            4.17808 |     9047.8 |     7155.2 |     3765.2 |      93   |      73.2 |      17.1 |

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

  qgis218-stock:
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

  qgis310-stock:
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

  qgis314-stock:
    active: yes
    inherit: qgis310-stock
    compose-variables:
      QGIS_VERSION: '3.14'
    projects:
      somap314_lk:
        - lk_big.txt
      somap314_grundplanav_farbig:
        - av_f_big.txt
      somap314_grundplanav_sw:
        - av_sw_big.txt

  qgis314-standalone:
    active: yes
    inherit: qgis314-stock
    template: docker-compose-qgis-3-standalone
    path-prefix: 'ogc'

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
  qgis218-stock:
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
  qgis310-stock:
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
  qgis314-standalone:
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
    inherit: qgis314-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-standalone
  qgis314-stock:
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
    inherit: qgis310-stock
    path-prefix: ogc
    projects:
      somap314_grundplanav_farbig:
      - av_f_big.txt
      somap314_grundplanav_sw:
      - av_sw_big.txt
      somap314_lk:
      - lk_big.txt
    template: docker-compose-qgis-3-nginx

```