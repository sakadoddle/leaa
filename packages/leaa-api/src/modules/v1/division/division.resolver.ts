// import { Args, Query, Mutation, Resolver, Int } from '@nestjs/graphql';
//
// import { Division, User } from '@leaa/api/src/entrys';
// import {
//   DivisionGetManyReq,
//   DivisionsWithPaginationObject,
//   DivisionGetOneReq,
//   DivisionCreateOneReq,
//   DivisionUpdateOneReq,
//   DivisionSyncToFileRes,
// } from '@leaa/api/src/dtos/division';
// import { DivisionService } from '@leaa/api/src/modules/v1/division/division.service';
// import { CurrentUser, Permissions, GqlCtx } from '@leaa/api/src/decorators';
//
// import { IGqlCtx } from '@leaa/api/src/interfaces';
//
// @Resolver(() => Division)
// export class DivisionResolver {
//   constructor(private readonly divisionService: DivisionService) {}
//
//   @Permissions('division.list-read')
//   @Query(() => DivisionsWithPaginationObject)
//   async divisions(
//     @GqlCtx() gqlCtx: IGqlCtx,
//     @Args() args: DivisionGetManyReq,
//   ): Promise<DivisionsWithPaginationObject | undefined> {
//     return this.divisionService.divisions(gqlCtx, args);
//   }
//
//   // DO NOT CHECK PERMISSIONS
//   @Query(() => String)
//   async divisionsMapping(): Promise<string | undefined> {
//     return this.divisionService.divisionsMapping();
//   }
//
//   // DO NOT CHECK PERMISSIONS
//   @Query(() => String)
//   async divisionsTree(): Promise<string | undefined | void> {
//     return this.divisionService.divisionsTree();
//   }
//
//   @Permissions('division.item-read')
//   @Query(() => Division)
//   async division(
//     @GqlCtx() gqlCtx: IGqlCtx,
//     @Args({ name: 'id', type: () => String }) id: string,
//     @Args() args?: DivisionGetOneReq,
//   ): Promise<Division | undefined> {
//     return this.divisionService.division(gqlCtx, id, args);
//   }
//
//   @Permissions('division.item-create')
//   @Mutation(() => Division)
//   async createDivision(@Args('division') args: DivisionCreateOneReq): Promise<Division | undefined> {
//     return this.divisionService.createDivision(args);
//   }
//
//   @Permissions('division.item-update')
//   @Mutation(() => DivisionSyncToFileRes)
//   async syncDivisionToFile(): Promise<DivisionSyncToFileRes> {
//     return this.divisionService.syncDivisionToFile();
//   }
//
//   @Permissions('division.item-update')
//   @Mutation(() => Division)
//   async updateDivision(
//     @GqlCtx() gqlCtx: IGqlCtx,
//     @Args({ name: 'id', type: () => String }) id: string,
//     @Args('division') args: DivisionUpdateOneReq,
//   ): Promise<Division | undefined> {
//     return this.divisionService.updateDivision(gqlCtx, id, args);
//   }
//
//   @Permissions('division.item-delete')
//   @Mutation(() => Division)
//   async deleteDivision(
//     @GqlCtx() gqlCtx: IGqlCtx,
//     @Args({ name: 'id', type: () => String }) id: string,
//   ): Promise<Division | undefined> {
//     return this.divisionService.deleteDivision(gqlCtx, id);
//   }
// }
