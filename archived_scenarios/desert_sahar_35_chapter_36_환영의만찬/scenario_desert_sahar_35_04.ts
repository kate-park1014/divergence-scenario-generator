export const scenario_desert_sahar_35_04 = {
	"scenario_id": "desert_sahar_35_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 모래언덕. 그 한가운데 거대한 거북이 형상의 화덕이 존재했다.",
						"english": "Endless dunes stretched out. In their midst, a colossal turtle-shaped furnace stood.",
						"japanese": "果てしなく広がる砂丘。その真ん中に、巨大な亀の形をした炉が存在した。",
						"chinese": "无边无际的沙丘。在它们的中央，矗立着一个巨大的乌龟形熔炉。",
						"french": "Des dunes infinies s'étendaient. Au milieu, une fournaise colossale en forme de tortue se dressait.",
						"spanish": "Dunas interminables se extendían. En su centro, un horno colosal con forma de tortuga se alzaba.",
						"vietnamese": "Những đụn cát trải dài vô tận. Ở giữa chúng, một lò nung khổng lồ hình rùa sừng sững.",
						"thai": "เนินทรายที่ทอดยาวไม่สิ้นสุด ท่ามกลางนั้นมีเตาเผาขนาดใหญ่รูปร่างเต่าตั้งอยู่",
						"hindi": "अनंत रेत के टीले फैले हुए थे। उनके बीच में, एक विशाल कछुआ-आकार की भट्टी खड़ी थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 그 거북이 화덕?",
						"english": "Is that... the turtle furnace?",
						"japanese": "あれが…あの亀の炉？",
						"chinese": "那就是…那个乌龟炉子？",
						"french": "C'est ça... la fournaise-tortue ?",
						"spanish": "¿Esa es... la fragua de tortuga?",
						"vietnamese": "Kia là... lò rùa đó sao?",
						"thai": "นั่น...คือเตาเต่าเหรอ?",
						"hindi": "क्या वह... कछुआ भट्टी है?"
					}
				},
				{
					"content": {
						"korean": "가까이 갈수록 기분 나쁜 냄새가 나는데.",
						"english": "The closer I get, the worse the smell becomes.",
						"japanese": "近づくにつれて、嫌な匂いがする。",
						"chinese": "越靠近，味道越难闻。",
						"french": "Plus je m'approche, plus l'odeur est désagréable.",
						"spanish": "Cuanto más me acerco, peor huele.",
						"vietnamese": "Càng đến gần, mùi càng khó chịu.",
						"thai": "ยิ่งเข้าใกล้ กลิ่นยิ่งแย่ลง",
						"hindi": "जैसे-जैसे मैं करीब आता हूँ, बदबू और तेज़ होती जाती है।"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환상 요리 냄새인가?",
						"english": "Is this the smell of illusionary cuisine?",
						"japanese": "幻想料理の匂いか？",
						"chinese": "这是幻象料理的味道吗？",
						"french": "C'est l'odeur de la cuisine illusoire ?",
						"spanish": "¿Es este el olor de la cocina ilusoria?",
						"vietnamese": "Đây là mùi của món ăn ảo ảnh sao?",
						"thai": "นี่มันกลิ่นอาหารมายาเหรอ?",
						"hindi": "क्या यह भ्रमित करने वाले भोजन की गंध है?"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai"
				},
				{
					"emotion": "sad",
					"speaker": "kasai",
					"content": {
						"korean": "…누구냐. 이젠 아무도 오지 않을 줄 알았는데.",
						"english": "...Who are you? I thought no one would come anymore.",
						"japanese": "…誰だ。もう誰も来ないと思っていたのに。",
						"chinese": "……你是谁？我以为再也没有人会来了。",
						"french": "...Qui êtes-vous ? Je pensais que plus personne ne viendrait.",
						"spanish": "...¿Quién eres? Pensé que ya nadie vendría.",
						"vietnamese": "...Ngươi là ai? Ta cứ nghĩ sẽ không còn ai đến nữa.",
						"thai": "...ใครกัน ฉันคิดว่าจะไม่มีใครมาแล้วซะอีก",
						"hindi": "...कौन हो तुम? मैंने सोचा था कि अब कोई नहीं आएगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 대체… 뭐하는 곳이야?",
						"english": "What in the world... is this place?",
						"japanese": "ここはいったい…何をする場所なんだ？",
						"chinese": "这里究竟……是什么地方？",
						"french": "Qu'est-ce que cet endroit... au juste ?",
						"spanish": "¿Qué demonios... es este lugar?",
						"vietnamese": "Nơi này rốt cuộc... là chỗ quái nào vậy?",
						"thai": "ที่นี่มัน...ที่ไหนกันแน่?",
						"hindi": "यह जगह आखिर... क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "환상을 파는 곳. 그리고 모든 것을 잃게 되는 곳.",
						"english": "A place to sell illusions. And a place to lose everything.",
						"japanese": "幻想を売る場所。そして、すべてを失う場所。",
						"chinese": "出售幻想之地。也是失去一切之地。",
						"french": "Un lieu où l'on vend des illusions. Et où l'on perd tout.",
						"spanish": "Un lugar donde se venden ilusiones. Y donde se pierde todo.",
						"vietnamese": "Nơi bán ảo ảnh. Và là nơi đánh mất tất cả.",
						"thai": "สถานที่ขายภาพลวงตา และสถานที่ที่ต้องสูญเสียทุกสิ่ง",
						"hindi": "भ्रम बेचने की जगह। और सब कुछ खोने की जगह।"
					},
					"speaker": "kasai"
				},
				{
					"content": {
						"korean": "나도 한때는 저 요리에… 모든 고통을 잊었지.",
						"english": "I, too, once… forgot all my pain in that dish.",
						"japanese": "私もかつてはあの料理で… すべての苦痛を忘れたものだ。",
						"chinese": "我也曾一度… 在那道菜中忘记了所有的痛苦。",
						"french": "Moi aussi, autrefois… j'oubliais toutes mes douleurs dans ce plat.",
						"spanish": "Yo también, una vez… olvidé todo mi dolor en ese plato.",
						"vietnamese": "Tôi cũng từng… quên hết mọi đau khổ trong món ăn đó.",
						"thai": "ครั้งหนึ่งฉันก็เคย… ลืมความเจ็บปวดทั้งหมดไปกับอาหารจานนั้น",
						"hindi": "मैं भी कभी… उस पकवान में अपने सारे दुख भूल गया था।"
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "kasai",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kasai",
					"content": {
						"korean": "그때는 몰랐어. 고통만 사라진 게 아니라는 걸.",
						"english": "Back then, I didn't know. That it wasn't just the pain that disappeared.",
						"japanese": "その時は知らなかった。苦痛だけが消えたわけではないということを。",
						"chinese": "那时我不知道。消失的不只是痛苦。",
						"french": "À l'époque, je ne savais pas. Que ce n'était pas seulement la douleur qui disparaissait.",
						"spanish": "En ese momento, no lo sabía. Que no solo desaparecía el dolor.",
						"vietnamese": "Hồi đó, tôi không biết. Rằng không chỉ nỗi đau biến mất.",
						"thai": "ตอนนั้นฉันไม่รู้ว่า… ไม่ใช่แค่ความเจ็บปวดเท่านั้นที่หายไป",
						"hindi": "तब मुझे नहीं पता था। कि सिर्फ दर्द ही नहीं, और भी कुछ गायब हुआ था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭐가 사라졌다는 건데?",
						"english": "Then what else disappeared?",
						"japanese": "じゃあ、何が消えたって言うんだ？",
						"chinese": "那还消失了什么？",
						"french": "Alors, qu'est-ce qui a disparu d'autre ?",
						"spanish": "¿Entonces qué más desapareció?",
						"vietnamese": "Vậy thì cái gì đã biến mất?",
						"thai": "แล้วมีอะไรหายไปอีก?",
						"hindi": "तो और क्या गायब हो गया था?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kasai",
					"content": {
						"korean": "사랑하는 사람도, 기억도, 행복했던 순간마저도. 전부 다.",
						"english": "Loved ones, memories, even happy moments. Everything.",
						"japanese": "愛する人も、記憶も、幸せだった瞬間さえも。何もかも。",
						"chinese": "所爱之人，记忆，甚至幸福的瞬间。全部。",
						"french": "Les êtres chers, les souvenirs, même les moments heureux. Tout.",
						"spanish": "Los seres queridos, los recuerdos, incluso los momentos felices. Todo.",
						"vietnamese": "Người thân yêu, ký ức, thậm chí cả những khoảnh khắc hạnh phúc. Tất cả.",
						"thai": "คนรัก ความทรงจำ แม้แต่ช่วงเวลาแห่งความสุข ทุกสิ่งทุกอย่าง",
						"hindi": "प्रियजन भी, यादें भी, खुशी के पल भी। सब कुछ।"
					}
				},
				{
					"content": {
						"korean": "결국 남은 건… 텅 빈 공허함뿐이었어.",
						"english": "In the end, all that remained was… an empty void.",
						"japanese": "結局残ったのは… 空っぽの虚無感だけだった。",
						"chinese": "最终剩下的… 只有空虚。",
						"french": "Au final, il ne restait plus… qu'un vide béant.",
						"spanish": "Al final, lo único que quedó fue… un vacío.",
						"vietnamese": "Cuối cùng, tất cả những gì còn lại là… một sự trống rỗng vô tận.",
						"thai": "สุดท้ายแล้ว… เหลือไว้เพียงความว่างเปล่า",
						"hindi": "अंत में जो बचा… वह बस एक खालीपन था।"
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "kasai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kasai",
					"content": {
						"korean": "사하르는 너희에게도 똑같은 '완벽한 행복'을 줄 거야.",
						"english": "Sahar will give you the same 'perfect happiness' too.",
						"japanese": "サハルはお前たちにも同じ「完璧な幸福」を与えるだろう。",
						"chinese": "萨哈尔也会给你们同样的“完美幸福”。",
						"french": "Sahar vous offrira également le même \"bonheur parfait\".",
						"spanish": "Sahar también os dará la misma \"felicidad perfecta\".",
						"vietnamese": "Sahar cũng sẽ mang đến cho các ngươi 'hạnh phúc hoàn hảo' đó.",
						"thai": "ซาฮาร์จะมอบ 'ความสุขที่สมบูรณ์แบบ' แบบเดียวกันให้กับพวกเจ้าด้วย",
						"hindi": "सहार तुम्हें भी वही 'परिपूर्ण खुशी' देगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리는 속지 않아.",
						"english": "We won't be fooled.",
						"japanese": "我々は騙されない。",
						"chinese": "我们不会上当。",
						"french": "Nous ne nous laisserons pas berner.",
						"spanish": "No nos engañarán.",
						"vietnamese": "Chúng tôi sẽ không bị lừa.",
						"thai": "เราจะไม่หลงกล",
						"hindi": "हम धोखा नहीं खाएंगे।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그 '완벽함'의 끝엔 아무것도 없어. 진실도, 삶도.",
						"english": "At the end of that 'perfection', there's nothing. No truth, no life.",
						"japanese": "その「完璧さ」の果てには何もない。真実も、生も。",
						"chinese": "那“完美”的尽头一无所有。没有真相，也没有生命。",
						"french": "Au bout de cette \"perfection\", il n'y a rien. Ni vérité, ni vie.",
						"spanish": "Al final de esa \"perfección\", no hay nada. Ni verdad, ni vida.",
						"vietnamese": "Cuối cùng của sự 'hoàn hảo' đó chẳng có gì cả. Không chân lý, không sự sống.",
						"thai": "ที่ปลายทางของ 'ความสมบูรณ์แบบ' นั้นไม่มีอะไรเลย ทั้งความจริงและชีวิต",
						"hindi": "उस 'पूर्णता' के अंत में कुछ भी नहीं है। न सत्य, न जीवन।"
					},
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 사하르의 왜곡된 신념이겠지.",
						"english": "That must be Sahar's twisted belief.",
						"japanese": "それがサハルの歪んだ信念なのだろう。",
						"chinese": "那就是萨哈尔扭曲的信仰吧。",
						"french": "C'est sans doute la croyance déformée de Sahar.",
						"spanish": "Esa debe ser la creencia distorsionada de Sahar.",
						"vietnamese": "Đó chắc là niềm tin méo mó của Sahar.",
						"thai": "นั่นคงเป็นความเชื่อที่บิดเบือนของซาฮาร์",
						"hindi": "वही सहार का विकृत विश्वास होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "kasai",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "카사이는 다시 어둠 속으로 사라졌다. 탐험대는 멈추지 않았다.",
						"english": "Kassai vanished into darkness again. The expedition did not stop.",
						"japanese": "カサイは再び闇の中へ消えた。探検隊は止まらなかった。",
						"chinese": "卡赛再次消失在黑暗中。探险队没有停止。",
						"french": "Kassai disparut à nouveau dans l'obscurité. L'expédition ne s'arrêta pas.",
						"spanish": "Kassai desapareció de nuevo en la oscuridad. La expedición no se detuvo.",
						"vietnamese": "Kassai lại biến mất vào bóng tối. Đoàn thám hiểm không dừng lại.",
						"thai": "คาซายหายลับไปในความมืดอีกครั้ง คณะสำรวจยังคงดำเนินต่อไป",
						"hindi": "कसाया फिर से अंधेरे में गायब हो गया। अभियान रुका नहीं।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "후회할 것이다. 고통을 거부한 자들아.",
						"english": "You will regret this, you who refused suffering.",
						"japanese": "後悔するだろう。苦痛を拒んだ者たちよ。",
						"chinese": "你们会后悔的。那些拒绝痛苦的人们。",
						"french": "Vous le regretterez, vous qui avez refusé la souffrance.",
						"spanish": "Os arrepentiréis, vosotros que rechazasteis el sufrimiento.",
						"vietnamese": "Ngươi sẽ phải hối hận. Những kẻ từ chối đau khổ.",
						"thai": "พวกเจ้าจะต้องเสียใจ ผู้ที่ปฏิเสธความเจ็บปวด",
						"hindi": "तुम पछताओगे, तुम सब जिन्होंने पीड़ा को अस्वीकार किया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "…还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 와도 결국 사하르 님의 품으로 돌아올 뿐. 너희는 진정으로 행복해질 수 없다.",
						"english": "No matter how many times you return, you'll only end up back in Lady Sahar's embrace. You can never be truly happy.",
						"japanese": "また戻ってきても、結局はサハル様の懐に戻るだけ。お前たちは真に幸せにはなれない。",
						"chinese": "即使你们回来，最终也只会回到萨哈尔大人的怀抱。你们永远无法真正幸福。",
						"french": "Même si vous revenez, vous ne ferez que retourner dans les bras de Dame Sahar. Vous ne pourrez jamais être vraiment heureux.",
						"spanish": "Aunque regresen, solo volverán al abrazo de Lady Sahar. Nunca podrán ser verdaderamente felices.",
						"vietnamese": "Dù có quay lại, các ngươi cũng chỉ trở về vòng tay của Phu nhân Sahar mà thôi. Các ngươi sẽ không bao giờ có thể thực sự hạnh phúc.",
						"thai": "แม้จะกลับมาอีกครั้ง เจ้าก็จะกลับสู่อ้อมกอดของท่านซาฮาร์เท่านั้น เจ้าไม่มีทางมีความสุขอย่างแท้จริงได้เลย",
						"hindi": "चाहे तुम कितनी बार भी वापस आओ, तुम अंततः लेडी सहर की आगोश में ही लौटोगे। तुम कभी सच में खुश नहीं हो सकते।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이… 이럴 수가… 사하르 님….",
						"english": "Ugh... Th-this can't be... Lord Sahar...",
						"japanese": "くっ…こ…こんな馬鹿な…サハル様…。",
						"chinese": "呃啊…这…这不可能…萨哈尔大人…。",
						"french": "Argh... C-ce n'est pas possible... Lord Sahar...",
						"spanish": "Ugh... N-no puede ser... Lord Sahar...",
						"vietnamese": "Khụ... Khô... Không thể nào... Thần Sahar...",
						"thai": "อึก… นี่… นี่มันเป็นไปไม่ได้… ท่านซาฮาร์…",
						"hindi": "उफ़... य-यह नहीं हो सकता... सहार महाराज..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "환상의 시대는 끝이다.",
						"english": "The age of illusion is over.",
						"japanese": "幻想の時代は終わりだ。",
						"chinese": "幻象时代结束了。",
						"french": "L'ère de l'illusion est terminée.",
						"spanish": "La era de la ilusión ha terminado.",
						"vietnamese": "Thời đại ảo ảnh đã kết thúc.",
						"thai": "ยุคแห่งภาพลวงตาได้สิ้นสุดลงแล้ว",
						"hindi": "भ्रम का युग समाप्त हो गया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 화덕이 꺼지자, 역겨운 환상의 향기가 사라졌다. 사막에 잠시 정적이 흘렀다. 그러나 아직, 진실은 저 너머에 있었다.",
						"english": "As the giant forge extinguished, the sickening scent of illusion vanished. A brief silence fell upon the desert. But still, the truth lay beyond.",
						"japanese": "巨大な炉が消えると、忌まわしい幻想の香りが消え去った。砂漠に一時、静寂が訪れた。しかし、真実はまだその先にあった。",
						"chinese": "随着巨大的熔炉熄灭，令人作呕的幻象气息消散了。沙漠陷入了短暂的沉寂。然而，真相仍在远方。",
						"french": "Lorsque l'énorme forge s'éteignit, l'odeur nauséabonde de l'illusion disparut. Un bref silence tomba sur le désert. Mais la vérité se trouvait encore au-delà.",
						"spanish": "Cuando la gigantesca forja se extinguió, el nauseabundo aroma de la ilusión se desvaneció. Un breve silencio se cernió sobre el desierto. Pero aun así, la verdad yacía más allá.",
						"vietnamese": "Khi lò rèn khổng lồ tắt, mùi hương ảo ảnh ghê tởm biến mất. Một khoảng lặng ngắn ngủi bao trùm sa mạc. Nhưng sự thật vẫn còn ở phía xa.",
						"thai": "เมื่อเตาหลอมขนาดมหึมาดับลง กลิ่นอายของภาพลวงตาอันน่ารังเกียจก็หายไป ความเงียบสงบปกคลุมทะเลทรายชั่วขณะ แต่ความจริงยังคงอยู่เบื้องหลัง",
						"hindi": "जैसे ही विशाल भट्टी बुझ गई, भ्रम की घृणित गंध गायब हो गई। रेगिस्तान में कुछ देर के लिए सन्नाटा छा गया। लेकिन फिर भी, सच्चाई उससे परे थी।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거북이 화덕의 심장부. 정체 모를 그림자가 기다리고 있었다.",
						"english": "The heart of the Turtle Forge. An unknown shadow awaited.",
						"japanese": "亀の炉の心臓部。正体不明の影が待ち受けていた。",
						"chinese": "龟炉之心。一个不知名的影子在等待。",
						"french": "Au cœur de la Forge de la Tortue. Une ombre inconnue attendait.",
						"spanish": "El corazón de la Forja Tortuga. Una sombra desconocida aguardaba.",
						"vietnamese": "Trung tâm của Lò Rùa. Một bóng hình không rõ danh tính đang chờ đợi.",
						"thai": "ใจกลางเตาหลอมเต่า ร่างเงาปริศนากำลังรออยู่",
						"hindi": "कछुआ भट्टी का हृदय। एक अज्ञात छाया प्रतीक्षा कर रही थी।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "focus",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자 주제에 여기까지 오다니. 어리석군.",
						"english": "Intruders, to have come this far. Foolish.",
						"japanese": "侵入者の分際でここまで来るとは。愚かな。",
						"chinese": "侵入者竟然能到这里。真是愚蠢。",
						"french": "Des intrus, être venus jusqu'ici. Stupide.",
						"spanish": "Invasores, haber llegado tan lejos. Necios.",
						"vietnamese": "Kẻ xâm nhập mà lại dám đến tận đây. Thật ngu xuẩn.",
						"thai": "พวกผู้บุกรุก บังอาจมาถึงที่นี่ได้ไง โง่เขลาสิ้นดี",
						"hindi": "घुसपैठिये, इतनी दूर तक आने की हिम्मत की। मूर्ख।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "사하르의 꼭두각시인가?",
						"english": "Are you Sahar's puppets?",
						"japanese": "サハルの操り人形か？",
						"chinese": "是萨哈尔的傀儡吗？",
						"french": "Êtes-vous les marionnettes de Sahar ?",
						"spanish": "¿Sois las marionetas de Sahar?",
						"vietnamese": "Ngươi là con rối của Sahar ư?",
						"thai": "พวกเจ้าเป็นหุ่นเชิดของซาฮาร์หรือ?",
						"hindi": "क्या तुम सहार के कठपुतले हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 사하르 님을 모욕하다니. 네놈들도 환상 속에서 영원히 잠들게 해주마.",
						"english": "How dare you insult Lord Sahar. I'll make sure you slumber forever in illusion.",
						"japanese": "よくもサハル様を侮辱したな。貴様らも幻想の中で永遠に眠らせてやろう。",
						"chinese": "竟敢侮辱萨哈尔大人。我也要让你们永远沉睡在幻象之中。",
						"french": "Comment osez-vous insulter Lord Sahar ? Je vous ferai dormir éternellement dans l'illusion.",
						"spanish": "¿Cómo osáis insultar a Lord Sahar? Os haré dormir para siempre en la ilusión.",
						"vietnamese": "Ngươi dám xúc phạm Thần Sahar sao. Ta sẽ cho các ngươi vĩnh viễn ngủ say trong ảo ảnh.",
						"thai": "กล้าดียังไงมาดูหมิ่นท่านซาฮาร์ ข้าจะให้พวกเจ้าหลับใหลในภาพลวงตานิรันดร์",
						"hindi": "तुमने हिम्मत कैसे की सहार महाराज का अपमान करने की। मैं तुम्हें भी भ्रम में हमेशा के लिए सुला दूंगा।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"사막 한가운데, 거대한 거북이 화덕이 입을 벌렸다.",
			"그 안에서 달콤한 환상의 속삭임이 새어 나왔다.",
			"한때 모든 것을 가졌던 자들이, 그 환상에 빠져 모든 것을 잃었다.",
			"그리고 그 공허함이 진실을 찾아 헤매는 발걸음을 멈추게 할 것이다."
		],
		"english": [
			"In the middle of the desert, a giant turtle furnace opened its maw.",
			"From within, the sweet whispers of illusion seeped out.",
			"Those who once had everything, lost it all, consumed by the illusion.",
			"And that void will halt the steps that wander in search of truth."
		],
		"japanese": [
			"砂漠の真ん中に、巨大な亀の炉が口を開けていた。",
			"その中から、甘い幻想の囁きが漏れ出した。",
			"かつて全てを持っていた者たちは、その幻想に囚われ、全てを失った。",
			"そしてその空虚さが、真実を求める彷徨う足取りを止めるだろう。"
		],
		"chinese": [
			"沙漠中央，一个巨大的乌龟炉子张开了口。",
			"从中，甜蜜幻象的低语声悄然泄出。",
			"那些曾拥有一切的人，沉沦于幻象，失去了一切。",
			"而那份空虚将阻止寻求真相的脚步。"
		],
		"french": [
			"Au milieu du désert, une gigantesque fournaise en forme de tortue ouvrit sa gueule.",
			"De son sein, les doux murmures de l'illusion s'échappèrent.",
			"Ceux qui avaient jadis tout, plongés dans l'illusion, perdirent tout.",
			"Et ce vide arrêtera les pas errants à la recherche de la vérité."
		],
		"spanish": [
			"En medio del desierto, un gigantesco horno de tortuga abrió su boca.",
			"De su interior, los dulces susurros de la ilusión se filtraron.",
			"Aquellos que una vez lo tuvieron todo, cayeron en la ilusión y lo perdieron todo.",
			"Y ese vacío detendrá los pasos que deambulan en busca de la verdad."
		],
		"vietnamese": [
			"Giữa sa mạc, một lò nung hình rùa khổng lồ há miệng.",
			"Từ bên trong, những lời thì thầm ngọt ngào của ảo ảnh rò rỉ ra.",
			"Những kẻ từng có tất cả, đã mất hết vì chìm đắm trong ảo ảnh.",
			"Và sự trống rỗng đó sẽ ngăn những bước chân lang thang tìm kiếm sự thật."
		],
		"thai": [
			"กลางทะเลทราย เตาเต่ายักษ์อ้าปากออก",
			"จากข้างใน เสียงกระซิบหวานหูแห่งมายาเล็ดลอดออกมา",
			"ผู้ที่เคยมีทุกสิ่ง ได้สูญสิ้นทุกอย่างไปในมายา",
			"และความว่างเปล่านั้นจะหยุดยั้งก้าวที่ออกตามหาความจริง"
		],
		"hindi": [
			"रेगिस्तान के बीच में, एक विशाल कछुआ भट्टी ने अपना मुँह खोल दिया।",
			"उसके भीतर से, भ्रम की मीठी फुसफुसाहटें रिसने लगीं।",
			"जिन्होंने कभी सब कुछ पाया था, वे भ्रम में पड़कर सब कुछ खो बैठे।",
			"और वह शून्यता सत्य की तलाश में भटकते कदमों को रोक देगी।"
		]
	}
} as const;
