/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AdoptionInterface extends ethers.utils.Interface {
  functions: {
    "adopt(uint256)": FunctionFragment;
    "adopters(uint256)": FunctionFragment;
    "getAdopters()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "adopt", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "adopters",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAdopters",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "adopt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "adopters", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAdopters",
    data: BytesLike
  ): Result;

  events: {};
}

export class Adoption extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AdoptionInterface;

  functions: {
    adopt(
      petId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adopters(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    getAdopters(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string,
          string
        ]
      ]
    >;
  };

  adopt(
    petId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adopters(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  getAdopters(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string
    ]
  >;

  callStatic: {
    adopt(petId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    adopters(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getAdopters(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    >;
  };

  filters: {};

  estimateGas: {
    adopt(
      petId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adopters(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    getAdopters(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    adopt(
      petId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adopters(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAdopters(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
