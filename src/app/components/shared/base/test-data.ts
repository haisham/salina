import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';

const moment = _rollupMoment || _moment;

export interface DataElemets {
  GUID: string;
  RoutingKey: string;
  CorrelationId: string;
  Message: string;
  isRetry: boolean;
  CreatedAt: any;
}

export const ELEMENT_DATA: DataElemets[] = [
  {
    GUID: '1011-1022-1033-1044',
    RoutingKey: 'testkey 1',
    CorrelationId: '1',
    Message: '{"FirstName":"Lars","LastName":"Ism.","adresse":"Søborg","email":"lars@test.dk","synced":"true"}',
    isRetry: true,
    CreatedAt: moment(new Date()).format('DD.MM.YYYY'),
  },
  {
    GUID: '1013-1024-1033-1045',
    RoutingKey: 'testkey 2',
    CorrelationId: '2',
    Message: '{"FirstName":"Marie","LastName":"Jul.","adresse":"Gladsaxe","email":"marie@test.dk","synced":"true"}',
    isRetry: false,
    CreatedAt: moment(new Date()).format('DD.MM.YYYY'),
  },
  {
    GUID: '1016-1042-1233-1046',
    RoutingKey: 'testkey 3',
    CorrelationId: '3',
    Message: '{"FirstName":"Aslan","LastName":"b.","adresse":"København","email":"lars@test.dk","synced":"true"}',
    isRetry: true,
    CreatedAt: moment(new Date()).format('DD.MM.YYYY'),
  },
  {
    GUID: '1017-1026-1033-1047',
    RoutingKey: 'testkey 4',
    CorrelationId: '4',
    Message: '{"FirstName":"User 4","LastName":"user 4"}',
    isRetry: true,
    CreatedAt: moment(new Date()).format('DD.MM.YYYY'),
  },
  {
    GUID: '1016-1042-1233-1046',
    RoutingKey: 'testkey 4',
    CorrelationId: '3',
    Message: '{"FirstName":"user 5","LastName":"user 5"}',
    isRetry: true,
    CreatedAt: moment(new Date()).add(1, 'd').format('DD.MM.YYYY'),
  },
  {
    GUID: '1017-1026-1033-1047',
    RoutingKey: 'testkey 5',
    CorrelationId: '4',
    Message: '{"FirstName":"user 6","LastName":"user 6"}',
    isRetry: true,
    CreatedAt: moment(new Date()).add(1, 'd').format('DD.MM.YYYY'),
  },
  {
    GUID: '1019-1027-1033-1047',
    RoutingKey: 'testkey 6',
    CorrelationId: '4',
    Message: '{"FirstName":"user 7","LastName":"user 7"}',
    isRetry: true,
    CreatedAt: moment(new Date()).add(1, 'd').format('DD.MM.YYYY'),
  },
  {
    GUID: '1018-1026-1033-1047',
    RoutingKey: 'testkey 6',
    CorrelationId: '4',
    Message: '{"FirstName":"user 8","LastName":"user 8"}',
    isRetry: true,
    CreatedAt: moment(new Date()).add(1, 'd').format('DD.MM.YYYY'),
  },
  {
    GUID: '1017-1026-1033-1047',
    RoutingKey: 'testkey 6',
    CorrelationId: '4',
    Message: '{"FirstName":"user 9","LastName":"user 9"}',
    isRetry: true,
    CreatedAt: moment(new Date()).add(1, 'd').format('DD.MM.YYYY'),
  },
  {
    GUID: '1017-1026-1033-1047',
    RoutingKey: 'testkey 10',
    CorrelationId: '4',
    Message: '{"FirstName":"user 10","LastName":"user 10"}',
    isRetry: true,
    CreatedAt: moment(new Date()).add(1, 'd').format('DD.MM.YYYY'),
  },
];

