import type { TestingModule } from "@nestjs/testing";
import { Test } from "@nestjs/testing";
import { AllMoviesController } from "src/all/allMovies.controller";
import { AllMoviesService } from "src/all/allMovies.service";

describe("AllMoviesController", () => {
  let allMoviesController: AllMoviesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AllMoviesController],
      providers: [AllMoviesService],
    }).compile();

    allMoviesController = app.get<AllMoviesController>(AllMoviesController);
  });

  describe("getHello", () => {
    it('should return "Hello World!"', () => {
      expect(allMoviesController.getHello()).toBe("Hello World!");
    });
  });
});
